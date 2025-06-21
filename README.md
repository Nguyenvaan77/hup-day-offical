# 🏦 Bank Monolithic System - Implementation Complete

**Version:** 1.0.0  
**Status:** ✅ Ready for Build & Run  
**Type:** Simplified Monolithic (No CQRS/Event Sourcing)  
**Language:** Java 21  
**Framework:** Spring Boot 3.3.4

---

## 📋 What's Included

### ✅ Entities (5 classes)

- `User.java` - User management with roles
- `Role.java` - Role definitions
- `Customer.java` - Customer information
- `Account.java` - Bank accounts
- `Operation.java` - Transaction history

### ✅ Repositories (5 interfaces)

- `UserRepository` - User data access
- `RoleRepository` - Role data access
- `CustomerRepository` - Customer CRUD
- `AccountRepository` - Account CRUD
- `OperationRepository` - Transaction history access

### ✅ DTOs (10 classes)

- Login, User, Customer, Account, Operation DTOs
- Request and Response objects

### ✅ Services (6 classes)

- `UserService` - User management & authentication
- `RoleService` - Role management
- `CustomerService` - Customer CRUD
- `AccountService` - Account operations + **TRANSFER LOGIC** with @Transactional
- `OperationService` - Transaction history
- `NotificationService` - Email notifications

### ✅ Controllers (5 classes)

- `AuthenticationController` - Login endpoint
- `UserController` - User CRUD + role management
- `CustomerController` - Customer CRUD + search
- `AccountController` - Account CRUD + credit/debit/transfer
- `NotificationController` - Email sending

### ✅ Security (4 classes)

- `JwtTokenProvider` - JWT token generation & validation
- `SecurityConfig` - Spring Security configuration
- `CustomUserDetailsService` - User details service
- `JwtAuthenticationFilter` - JWT request filter

### ✅ Exception Handling (5 classes)

- `ResourceNotFoundException` - 404 errors
- `BusinessException` - Business logic errors
- `UnauthorizedException` - Authentication errors
- `GlobalExceptionHandler` - Centralized error handling
- `ApiResponse<T>` - Unified response format

### ✅ Configuration

- `application.yml` - Main configuration
- `application-dev.yml` - Development profile
- `application-prod.yml` - Production profile
- `application-test.yml` - Testing profile (H2)

### ✅ Database

- `setup-db.sql` - Schema creation (6 tables)
- `init-data.sql` - Sample data

### ✅ Docker Support

- `Dockerfile` - Multi-stage build
- `docker-compose.yml` - MySQL + PhpMyAdmin

### ✅ Testing

- `AccountServiceTest.java` - Unit tests with @DataJpaTest
- Test configuration profile

### ✅ Build

- `pom.xml` - Maven configuration with all dependencies

---

## 🚀 Quick Start (3 steps)

### 1. Setup Database

```bash
# Option 1: Docker (recommended)
docker-compose up -d

# Option 2: Manual MySQL
mysql -u root -p < scripts/setup-db.sql
mysql -u root -p < scripts/init-data.sql
```

### 2. Build Project

```bash
mvn clean install
```

### 3. Run Application

```bash
mvn spring-boot:run
# or
java -jar target/bank-monolithic3-1.0.0.jar
```

---

## 🔐 Default Credentials

- **Username:** admin
- **Password:** admin123
- **Role:** ROLE_ADMIN

---

## 📡 API Endpoints

### Authentication

```
POST   /api/authentication/login
GET    /api/authentication/health
```

### Users

```
POST   /api/users/create
GET    /api/users/{id}
PUT    /api/users/{id}
GET    /api/users/all
DELETE /api/users/{id}
POST   /api/users/{userId}/roles/{roleId}
```

### Customers

```
POST   /api/customers/create
GET    /api/customers/{id}
GET    /api/customers/find/{cin}
GET    /api/customers/list
GET    /api/customers/search?firstName=John
PUT    /api/customers/{id}
DELETE /api/customers/{id}
```

### Accounts

```
POST   /api/accounts/create
GET    /api/accounts/{id}
GET    /api/accounts/customer/{customerId}
PUT    /api/accounts/{id}
POST   /api/accounts/{id}/credit          (deposit)
POST   /api/accounts/{id}/debit           (withdraw)
POST   /api/accounts/transfer             (money transfer)
DELETE /api/accounts/{id}
GET    /api/accounts/{accountId}/operations
GET    /api/accounts/operation/{id}
```

### Notifications

```
POST   /api/notifications/send
```

---

## 🧪 Test Login

```bash
curl -X POST http://localhost:8080/api/authentication/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'
```

Response:

```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "token": "eyJhbGc...",
    "refreshToken": "eyJhbGc...",
    "expiresIn": 86400000,
    "username": "admin"
  }
}
```

---

## 📁 Project Structure

```
monolithic3/
├── pom.xml                              ← Maven configuration
├── src/
│   ├── main/
│   │   ├── java/com/bank/
│   │   │   ├── BankApplication.java     ← Entry point
│   │   │   ├── auth/
│   │   │   │   ├── entity/              (User, Role)
│   │   │   │   ├── service/             (UserService, RoleService)
│   │   │   │   ├── repository/          (UserRepository, RoleRepository)
│   │   │   │   ├── controller/          (UserController, AuthenticationController)
│   │   │   │   ├── dto/                 (LoginRequestDTO, UserResponseDTO, etc)
│   │   │   │   └── security/            (JwtTokenProvider, SecurityConfig, etc)
│   │   │   ├── customer/
│   │   │   │   ├── entity/              (Customer)
│   │   │   │   ├── service/             (CustomerService)
│   │   │   │   ├── repository/          (CustomerRepository)
│   │   │   │   ├── controller/          (CustomerController)
│   │   │   │   └── dto/                 (CustomerRequestDTO, CustomerResponseDTO)
│   │   │   ├── account/
│   │   │   │   ├── entity/              (Account, Operation)
│   │   │   │   ├── service/             (AccountService - with transfer logic, OperationService)
│   │   │   │   ├── repository/          (AccountRepository, OperationRepository)
│   │   │   │   ├── controller/          (AccountController)
│   │   │   │   └── dto/                 (AccountRequestDTO, TransferRequestDTO, etc)
│   │   │   ├── notification/
│   │   │   │   ├── service/             (NotificationService)
│   │   │   │   ├── controller/          (NotificationController)
│   │   │   │   └── dto/
│   │   │   └── common/
│   │   │       ├── exception/           (GlobalExceptionHandler, BusinessException, etc)
│   │   │       ├── response/            (ApiResponse<T>)
│   │   │       └── constants/           (AppConstants)
│   │   └── resources/
│   │       ├── application.yml          ← Main config
│   │       ├── application-dev.yml      ← Development
│   │       ├── application-prod.yml     ← Production
│   │       └── application-test.yml     ← Testing
│   └── test/
│       ├── java/com/bank/
│       │   └── account/service/
│       │       └── AccountServiceTest.java
│       └── resources/
│           └── application.yml
├── scripts/
│   ├── setup-db.sql                     ← Database schema
│   └── init-data.sql                    ← Sample data
├── Dockerfile                           ← Container build
├── docker-compose.yml                   ← Docker setup
├── .gitignore
└── README.md
```

---

## ⚙️ Configuration

### Development

```bash
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev"
```

### Production

```bash
java -jar target/bank-monolithic3-1.0.0.jar --spring.profiles.active=prod
```

### Testing

```bash
mvn test
# H2 in-memory database is used automatically
```

---

## 🔑 Key Features

✅ **JWT Authentication** - Secure token-based authentication  
✅ **Role-Based Access Control (RBAC)** - Admin, User, Manager roles  
✅ **Money Transfer** - With @Transactional ACID guarantee  
✅ **Operation History** - All transactions recorded  
✅ **Exception Handling** - Global error handling  
✅ **Database Transactions** - ACID compliance  
✅ **Direct Service Calls** - No HTTP overhead (monolithic advantage)  
✅ **Email Notifications** - Send transaction alerts  
✅ **Swagger API Docs** - Auto-generated API documentation  
✅ **Docker Support** - Easy containerization  
✅ **H2 Testing** - In-memory database for tests

---

## 📊 Database Schema

```
users (id, username, email, password_hash, firstName, lastName, phone, active)
roles (id, name, description)
user_roles (user_id, role_id) -- junction table
customers (id, cin, firstName, lastName, email, phone, address, city)
accounts (id, customer_id, accountNumber, currency, balance, status)
operations (id, account_id, operationType, amount, description, operationDate)
```

---

## 🔐 Security Features

- **JWT Tokens** - Stateless authentication
- **BCrypt Password Encoding** - Secure password storage
- **Role-Based Access Control** - @PreAuthorize annotations
- **HTTPS Ready** - SSL/TLS configuration in production
- **CORS Support** - Configurable cross-origin requests

---

## 📈 Performance Optimizations

- **Connection Pooling** - HikariCP (10 connections, 5 min idle)
- **Database Indexing** - Optimized queries
- **Lazy Loading** - Efficient entity loading
- **Caching Ready** - Spring Cache support
- **Batch Processing** - Hibernate batch insert optimization

---

## 🧪 Testing

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=AccountServiceTest

# With coverage
mvn clean test jacoco:report
```

The test suite includes:

- Unit tests for AccountService
- Transfer validation
- Balance checking
- Error scenarios

---

## 🐳 Docker Deployment

### Build Image

```bash
docker build -t bank-monolithic3:1.0.0 .
```

### Run with Docker Compose

```bash
docker-compose up -d
```

### Access Services

- **App:** http://localhost:8080/api
- **Swagger:** http://localhost:8080/api/swagger-ui.html
- **PhpMyAdmin:** http://localhost:8081

---

## ⚠️ Important Notes

1. **Change JWT Secret** in `application.yml` for production
2. **Update Database Credentials** in config files
3. **Configure Email** settings in `application.yml` for notifications
4. **Use HTTPS** in production
5. **Set strong passwords** in production database

---

## 📚 Useful Commands

```bash
# Build without tests
mvn clean install -DskipTests=true

# Check dependency tree
mvn dependency:tree

# Format code
mvn spotless:apply

# Generate API documentation
mvn springdoc-openapi:generate-docs

# Profile analysis
mvn spring-boot:run -Dspring-boot.run.arguments="--spring.profiles.active=dev --debug"
```

---

## 🎯 Next Steps

1. ✅ Build project: `mvn clean install`
2. ✅ Setup database: `docker-compose up -d`
3. ✅ Run application: `mvn spring-boot:run`
4. ✅ Test login: Use curl command above
5. ✅ Create customers and accounts
6. ✅ Test money transfer
7. ✅ Check operation history

---

## 📞 Support

- Check logs: `logs/` directory
- Review configuration: `src/main/resources/application.yml`
- Browse API docs: http://localhost:8080/api/swagger-ui.html
- View database: http://localhost:8081 (PhpMyAdmin)

---

## ✨ Summary

This monolithic3 system is **simple, complete, and production-ready**:

- 📦 **40+ Java classes** with complete logic
- 🗄️ **6 database tables** with proper relationships
- 🔐 **JWT authentication** with role-based access
- 💰 **Money transfer** with ACID guarantee
- 🧪 **Unit tests** included
- 🐳 **Docker support** for easy deployment
- 📡 **20+ API endpoints** documented
- ⚙️ **4 configuration profiles** (dev, prod, test, main)

**Ready to run!** Just execute: `mvn clean install && mvn spring-boot:run`

---

**Status:** ✅ Complete Implementation  
**Last Updated:** December 25, 2025  
**License:** MIT
