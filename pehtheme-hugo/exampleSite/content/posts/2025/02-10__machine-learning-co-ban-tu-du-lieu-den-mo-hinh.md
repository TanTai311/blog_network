---
title: "Machine Learning cơ bản: từ dữ liệu đến mô hình"
date: 2025-02-10T09:30:00+07:00
slug: "machine-learning-co-ban-tu-du-lieu-den-mo-hinh"
description: "Tổng quan quy trình ML: xác định bài toán, dữ liệu, feature, huấn luyện, đánh giá và triển khai."
image: 'images/Machine Learning cơ bản từ dữ liệu đến mô hình.png'
categories:
  - machine-learning
tags:
  - machine-learning
  - data
  - feature
  - model
  - evaluation
  - mlops
draft: false
---

## 1. Giới thiệu

Trong kỷ nguyên dữ liệu số, Machine Learning (ML) đóng vai trò cốt lõi trong việc trích xuất tri thức từ dữ liệu và hỗ trợ ra quyết định tự động. Từ các hệ thống gợi ý, nhận dạng hình ảnh, xử lý ngôn ngữ tự nhiên cho đến dự báo tài chính, Machine Learning đều hiện diện như một nền tảng công nghệ quan trọng.

Bài viết này trình bày quy trình cơ bản của Machine Learning, bắt đầu từ dữ liệu thô cho đến khi xây dựng và đánh giá mô hình, nhằm giúp người học có cái nhìn tổng quan và có hệ thống.

## 2. Machine Learning là gì?

Machine Learning là một nhánh của Trí tuệ nhân tạo (AI), cho phép hệ thống tự học từ dữ liệu để đưa ra dự đoán hoặc quyết định mà không cần lập trình tường minh cho từng trường hợp.

Mục tiêu cốt lõi của ML:

- Phát hiện quy luật tiềm ẩn trong dữ liệu
- Dự đoán giá trị hoặc phân loại đối tượng
- Tự cải thiện hiệu suất khi có thêm dữ liệu

## 3. Quy trình tổng quát của Machine Learning

Quy trình Machine Learning cơ bản gồm các bước:

- Thu thập dữ liệu
- Tiền xử lý dữ liệu
- Trích xuất và lựa chọn đặc trưng
- Huấn luyện mô hình
- Đánh giá và tối ưu mô hình
- Triển khai và sử dụng mô hình

{{< img src="images/machinelearning1.png" alt="Quy trình tổng quát Machine Learning" >}}

## 4. Dữ liệu - nền tảng của Machine Learning

### 4.1. Vai trò của dữ liệu

Chất lượng của mô hình Machine Learning phụ thuộc trực tiếp vào chất lượng dữ liệu. Dữ liệu không đầy đủ hoặc sai lệch sẽ dẫn đến mô hình kém chính xác, dù thuật toán có phức tạp đến đâu.

### 4.2. Các loại dữ liệu thường gặp

- Structured data: bảng dữ liệu (CSV, SQL)
- Unstructured data: văn bản, hình ảnh, âm thanh
- Semi-structured data: JSON, XML

### 4.3. Nhãn dữ liệu

- Labeled data: có nhãn (supervised learning)
- Unlabeled data: không có nhãn (unsupervised learning)

## 5. Tiền xử lý dữ liệu (Data Preprocessing)

Tiền xử lý dữ liệu là bước quan trọng nhằm chuẩn hóa và làm sạch dữ liệu đầu vào.

Các kỹ thuật phổ biến:

- Xử lý giá trị thiếu (missing values)
- Loại bỏ dữ liệu nhiễu (outliers)
- Chuẩn hóa dữ liệu (Normalization, Standardization)
- Mã hóa dữ liệu phân loại (One-hot encoding, Label encoding)

👉 Bước này giúp mô hình:

- Học nhanh hơn
- Giảm sai lệch
- Cải thiện độ chính xác

## 6. Trích xuất và lựa chọn đặc trưng (Feature Engineering)

### 6.1. Feature là gì?

Feature là các thuộc tính đại diện cho dữ liệu mà mô hình sử dụng để học.

Ví dụ:

- Tuổi, thu nhập trong bài toán dự đoán tín dụng
- Tần suất từ khóa trong xử lý văn bản
- Pixel trong bài toán hình ảnh

### 6.2. Feature Engineering

Bao gồm:

- Tạo đặc trưng mới
- Chọn đặc trưng quan trọng
- Giảm chiều dữ liệu (PCA)

Feature Engineering tốt giúp mô hình:

- Học hiệu quả hơn
- Tránh overfitting
- Tăng khả năng tổng quát hóa

## 7. Các loại mô hình Machine Learning cơ bản

### 7.1. Supervised Learning

- Linear Regression
- Logistic Regression
- Decision Tree
- k-Nearest Neighbors (kNN)

Ứng dụng: dự đoán giá, phân loại email spam, chẩn đoán bệnh.

### 7.2. Unsupervised Learning

- K-Means Clustering
- Hierarchical Clustering
- Principal Component Analysis (PCA)

Ứng dụng: phân nhóm khách hàng, khám phá cấu trúc dữ liệu.

### 7.3. Semi-supervised & Reinforcement Learning

- Kết hợp dữ liệu có nhãn và không nhãn
- Học thông qua tương tác và phần thưởng

## 8. Huấn luyện mô hình (Model Training)

Quá trình huấn luyện gồm:

- Chia dữ liệu: Train / Validation / Test
- Tối ưu hàm mất mát (Loss function)
- Điều chỉnh tham số (Model parameters)

{{< img src="images/machinelearning2.png" alt="Minh họa huấn luyện mô hình" >}}

## 9. Đánh giá mô hình

Các chỉ số đánh giá phổ biến:

- Accuracy
- Precision / Recall
- F1-score
- Mean Squared Error (MSE)

Việc đánh giá giúp xác định:

- Mô hình có học tốt không
- Có bị overfitting hoặc underfitting hay không

## 10. Từ mô hình đến ứng dụng thực tế

Sau khi huấn luyện và đánh giá, mô hình có thể:

- Được tích hợp vào hệ thống backend
- Triển khai dưới dạng API
- Áp dụng vào hệ thống gợi ý, dự báo, phân loại

## 11. Kết luận

Machine Learning là một quy trình khép kín, bắt đầu từ dữ liệu và kết thúc bằng mô hình có khả năng dự đoán hoặc ra quyết định. Việc nắm vững các bước cơ bản từ thu thập dữ liệu, tiền xử lý, xây dựng và đánh giá mô hình là nền tảng quan trọng để tiếp cận các kỹ thuật Machine Learning nâng cao hơn trong tương lai.
