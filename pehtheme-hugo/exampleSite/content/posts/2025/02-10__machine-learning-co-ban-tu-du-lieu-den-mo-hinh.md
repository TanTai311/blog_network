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

## 1. Machine Learning là gì?
Machine Learning (ML) là cách để mô hình học quy luật từ dữ liệu thay vì viết cứng từng quy tắc. Hai nhóm phổ biến:
- **Supervised**: có nhãn, như phân loại spam/ham hoặc dự đoán giá.
- **Unsupervised**: không nhãn, như phân cụm khách hàng.

## 2. Xác định bài toán và metric
- Mục tiêu kinh doanh: tăng chuyển đổi, giảm rủi ro, tối ưu chi phí.
- Metric phù hợp: Accuracy/F1/AUC cho phân loại; MAE/RMSE cho hồi quy.
- Luôn có baseline đơn giản để so sánh (rule-based hoặc model tuyến tính).

## 3. Dữ liệu và chất lượng nhãn
- Thu thập dữ liệu đại diện, tránh lệch theo thời điểm/kênh.
- Làm sạch: trùng lặp, thiếu dữ liệu, outlier.
- Kiểm tra nhãn sai (label noise) vì sẽ làm mô hình học lệch.
- Tránh **data leakage**: không dùng thông tin chỉ có sau khi dự đoán.

## 4. EDA và feature engineering
- Phân tích phân phối, tương quan, outlier.
- Chuẩn hóa/scale nếu mô hình nhạy thang đo.
- Encoding danh mục: one-hot, target encoding.
- Feature từ thời gian, tần suất hành vi, văn bản (TF-IDF/embedding).

## 5. Chia tập và huấn luyện
- Chia train/validation/test (ví dụ 70/15/15).
- Dữ liệu theo thời gian thì chia theo mốc thời gian.
- Dùng cross-validation khi dữ liệu ít.
- Regularization/early stopping để giảm overfitting.

## 6. Mất cân bằng lớp
- Sử dụng class weight hoặc resampling (over/under-sampling).
- Đánh giá bằng Precision/Recall, không chỉ Accuracy.
- Điều chỉnh ngưỡng dự đoán (threshold) theo mục tiêu.

## 7. Lựa chọn mô hình và tuning
- Tuyến tính: nhanh, dễ giải thích.
- Tree-based (Random Forest, XGBoost/LightGBM): mạnh cho tabular.
- Neural Network: hợp dữ liệu lớn, phức tạp.
- Tuning hyperparameter bằng grid/random search hoặc Bayesian.

## 8. Đánh giá và giải thích
- Phân loại: Precision/Recall, F1, ROC-AUC, PR-AUC.
- Hồi quy: MAE, RMSE, R2.
- Phân tích lỗi theo nhóm (segment) để phát hiện bias.
- Dùng SHAP hoặc feature importance khi cần giải thích.

## 9. Triển khai và vận hành
- Đóng gói model, versioning rõ ràng.
- Theo dõi drift dữ liệu và hiệu năng sau triển khai.
- Lập lịch retrain định kỳ, có rollback khi cần.
- Log input/output để debug và cải tiến.

## 10. Checklist nhanh
- Bài toán và metric rõ ràng.
- Dữ liệu sạch, không leakage.
- Baseline trước, tối ưu sau.
- Theo dõi sau khi triển khai.

