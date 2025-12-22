---
title: "REST API nhỏ gọn với Spring Boot"
date: 2024-11-15T14:10:00+07:00
slug: "rest-api-spring-boot-co-ban"
description: "Thiết kế CRUD có phân trang, validation, trả lỗi chuẩn JSON và log request/response."
image: ''
categories:
  - java
tags:
  - java
  - spring-boot
  - rest-api
  - http
draft: false
---

## 1. Cấu trúc
- Controller: nhận request, validate.
- Service: xử lý nghiệp vụ.
- Repository: truy vấn DB.
- DTO: tách payload khỏi entity.

## 2. Controller mẫu
```java
@RestController
@RequestMapping("/api/posts")
class PostController {
  private final PostService service;
  @GetMapping
  Page<PostDto> list(Pageable pageable) { return service.list(pageable); }
  @PostMapping
  ResponseEntity<PostDto> create(@Valid @RequestBody CreatePost req) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.create(req));
  }
}
```

## 3. Validation & lỗi chuẩn JSON
- Dùng `@Valid`, Bean Validation.
- Xây `@ControllerAdvice` trả JSON: `code`, `message`, `traceId`.
- Log method, path, status, thời gian xử lý.

## 4. Bảo mật cơ bản
- Bật CORS đúng domain.
- Dùng token/JWT nếu cần; ẩn thông tin lỗi nhạy cảm.

## 5. Kiểm thử nhanh
- Postman/curl: tạo/list/update/delete.
- Kiểm tra phân trang `?page=0&size=10&sort=createdAt,desc`.
- Đảm bảo status code đúng (201/200/400/404/500).

## 6. Deploy
- Profile `dev` bật h2/log SQL; `prod` tắt h2, cấu hình DB thật.
- Health check tại `/actuator/health` nếu dùng actuator.
