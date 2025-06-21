package com.bank.account.service;

import com.bank.account.dto.TransactionRequestDTO;
import com.bank.account.dto.TransferRequestDTO;
import com.bank.account.entity.Account;
import com.bank.account.repository.AccountRepository;
import com.bank.account.repository.OperationRepository;
import com.bank.common.exception.BusinessException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.ActiveProfiles;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@Import(AccountService.class)
@ActiveProfiles("test")
public class AccountServiceTest {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private OperationRepository operationRepository;

    private Account sourceAccount;
    private Account targetAccount;

    @BeforeEach
    public void setUp() {
        // Create test accounts
        sourceAccount = Account.builder()
            .customerId(1L)
            .accountNumber("TEST001")
            .currency("USD")
            .balance(new BigDecimal("1000.00"))
            .status("ACTIVE")
            .build();

        targetAccount = Account.builder()
            .customerId(2L)
            .accountNumber("TEST002")
            .currency("USD")
            .balance(new BigDecimal("500.00"))
            .status("ACTIVE")
            .build();

        sourceAccount = accountRepository.save(sourceAccount);
        targetAccount = accountRepository.save(targetAccount);
    }

    @Test
    public void testCreditAccount() {
        // Act
        BigDecimal creditAmount = new BigDecimal("200.00");
        var result = accountService.creditAccount(sourceAccount.getId(),
            TransactionRequestDTO.builder()
                .amount(creditAmount)
                .description("Test credit")
                .build());

        // Assert
        assertEquals(new BigDecimal("1200.00"), result.getBalance());
        assertEquals(1, operationRepository.findByAccountId(sourceAccount.getId()).size());
    }

    @Test
    public void testDebitAccount() {
        // Act
        BigDecimal debitAmount = new BigDecimal("100.00");
        var result = accountService.debitAccount(sourceAccount.getId(),
            TransactionRequestDTO.builder()
                .amount(debitAmount)
                .description("Test debit")
                .build());

        // Assert
        assertEquals(new BigDecimal("900.00"), result.getBalance());
    }

    @Test
    public void testDebitAccountInsufficientBalance() {
        // Act & Assert
        assertThrows(BusinessException.class, () -> {
            accountService.debitAccount(sourceAccount.getId(),
                TransactionRequestDTO.builder()
                    .amount(new BigDecimal("2000.00"))
                    .description("Test debit - should fail")
                    .build());
        });
    }

    @Test
    public void testTransferMoney() {
        // Act
        BigDecimal transferAmount = new BigDecimal("300.00");
        accountService.transferMoney(TransferRequestDTO.builder()
            .fromAccountId(sourceAccount.getId())
            .toAccountId(targetAccount.getId())
            .amount(transferAmount)
            .description("Test transfer")
            .build());

        // Assert
        Account updatedSource = accountRepository.findById(sourceAccount.getId()).orElse(null);
        Account updatedTarget = accountRepository.findById(targetAccount.getId()).orElse(null);

        assertEquals(new BigDecimal("700.00"), updatedSource.getBalance());
        assertEquals(new BigDecimal("800.00"), updatedTarget.getBalance());
    }

    @Test
    public void testTransferMoneyInsufficientBalance() {
        // Act & Assert
        assertThrows(BusinessException.class, () -> {
            accountService.transferMoney(TransferRequestDTO.builder()
                .fromAccountId(sourceAccount.getId())
                .toAccountId(targetAccount.getId())
                .amount(new BigDecimal("2000.00"))
                .description("Test transfer - should fail")
                .build());
        });
    }
}
