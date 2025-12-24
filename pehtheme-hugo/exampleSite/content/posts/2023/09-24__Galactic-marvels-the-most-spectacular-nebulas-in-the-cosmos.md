---
title: "REST API nhỏ gọn với Spring Boot"
date: 2024-09-24T09:00:00+07:00
slug: "rest-api-nho-gon-voi-spring-boot"
description: "Kiến trúc REST API với Spring Boot, các thành phần cốt lõi và best practices cho dự án nhỏ."
image: 'images/REST API nhỏ gọn với Spring Boot.png'
categories:
  - backend
tags:
  - java
  - spring-boot
  - rest
  - api
  - backend
draft: false
---

## 1. Giới thiệu

Trong phát triển ứng dụng hiện đại, REST API đóng vai trò trung tâm trong việc kết nối giữa frontend, mobile app và các hệ thống backend. Với triết lý "convention over configuration", Spring Boot cho phép lập trình viên xây dựng REST API nhanh, gọn, dễ mở rộng mà không cần cấu hình phức tạp.

Bài viết này giới thiệu cách xây dựng một REST API nhỏ gọn với Spring Boot, tập trung vào kiến trúc cơ bản, các thành phần cốt lõi và những thực hành tốt (best practices).

## 2. REST API là gì?

### 2.1. Khái niệm REST

REST (Representational State Transfer) là phong cách kiến trúc cho hệ thống phân tán, trong đó:

- Mỗi tài nguyên được định danh bằng URL
- Dữ liệu được trao đổi qua HTTP
- Server không lưu trạng thái client (stateless)

### 2.2. Đặc điểm của REST API

- Sử dụng HTTP method: GET, POST, PUT, DELETE
- Dữ liệu thường ở dạng JSON
- Phân tách rõ client và server
- Dễ mở rộng và tích hợp

## 3. Vì sao chọn Spring Boot cho REST API?

Spring Boot được ưa chuộng nhờ:

- Tự động cấu hình (auto-configuration)
- Không cần cấu hình XML phức tạp
- Tích hợp sẵn server (Tomcat)
- Dễ phát triển và triển khai

Phù hợp cho cả dự án nhỏ lẫn hệ thống lớn.

## 4. Kiến trúc REST API với Spring Boot

{{< img src="images/spring-boot.png" alt="Spring Boot" >}}
{{< img src="images/kien-truc-api.png" alt="Kiến trúc API" >}}

Kiến trúc cơ bản gồm:

- Controller: tiếp nhận HTTP request
- Service: xử lý nghiệp vụ
- Repository: truy cập dữ liệu
- Model/Entity: biểu diễn dữ liệu

## 5. Tạo REST API đơn giản

### 5.1. Khởi tạo project

Project Spring Boot thường được tạo với:

- Spring Web
- Spring Data JPA (nếu dùng database)

### 5.2. Controller cơ bản

```java
@RestController
@RequestMapping("/api/hello")
public class HelloController {

    @GetMapping
    public String hello() {
        return "Hello Spring Boot API";
    }
}
```

`@RestController` cho phép trả về dữ liệu JSON trực tiếp.

## 6. Xây dựng REST API CRUD nhỏ gọn

### 6.1. Định nghĩa Entity

```java
public class User {
    private Long id;
    private String name;
    private String email;
}
```

### 6.2. Controller xử lý CRUD

```java
@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<User> getAllUsers() {
        return List.of(new User());
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return user;
    }
}
```

Spring Boot tự động:

- Mapping JSON ↔ Object
- Xử lý request/response

## 7. REST API nhỏ gọn - nhưng vẫn chuẩn

### 7.1. HTTP Status Code

```java
@PostMapping
public ResponseEntity<User> create(@RequestBody User user) {
    return ResponseEntity.status(HttpStatus.CREATED).body(user);
}
```

### 7.2. Validate dữ liệu

```java
public class User {
    @NotBlank
    private String name;
}

@PostMapping
public User create(@Valid @RequestBody User user) {
    return user;
}
```

## 8. Xử lý lỗi tập trung

### 8.1. Global Exception Handler

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handle(Exception ex) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Internal error");
    }
}
```

Giúp API:

- Trả lỗi nhất quán
- Dễ debug
- Dễ bảo trì

## 9. Best Practices cho REST API nhỏ gọn

- Tách rõ Controller - Service - Repository
- Không viết logic nghiệp vụ trong Controller
- Trả HTTP status code đúng
- Validate input
- Không lộ thông tin lỗi nhạy cảm
- Giữ API stateless

## 10. Ứng dụng thực tế

REST API với Spring Boot thường được dùng trong:

- Backend cho web/mobile app
- Microservices
- API Gateway
- Hệ thống tích hợp bên thứ ba

## 11. Kết luận

Với Spring Boot, việc xây dựng REST API nhỏ gọn nhưng vẫn chuẩn mực trở nên đơn giản và hiệu quả. Nhờ kiến trúc rõ ràng, khả năng mở rộng tốt và cộng đồng lớn, Spring Boot là lựa chọn phù hợp cho cả sinh viên học tập lẫn lập trình viên phát triển sản phẩm thực tế.

Nắm vững cách xây dựng REST API cơ bản là nền tảng quan trọng trước khi tiếp cận các chủ đề nâng cao như bảo mật API, microservices và distributed systems.
