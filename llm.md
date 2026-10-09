# Arshdeep Yadav — AI/ML Engineer · Product Builder · Machine Learning Researcher

> **Machine-Readable Portfolio & Profile Context**  
> Canonical URL: [https://arshdeep.works/](https://arshdeep.works/)  
> Version: 2026.1  
> Last Updated: October 2026  
> Contact: [arshdeep.yadav.work@gmail.com](mailto:arshdeep.yadav.work@gmail.com)  
> GitHub: [https://github.com/Arshdeep-Yadav](https://github.com/Arshdeep-Yadav)  
> LinkedIn: [https://www.linkedin.com/in/arshdeep-yadav](https://www.linkedin.com/in/arshdeep-yadav)  
> Resume: [View Official Resume](https://drive.google.com/file/d/1koy1MbHsjYekuMFHmuQfoqnsp4EB-gck/view?usp=sharing)  
> IEEE Publication: [IEEE Xplore Paper (11518743)](https://ieeexplore.ieee.org/document/11518743)

---

## 1. Executive Summary

Arshdeep Yadav is an **AI/ML Engineer**, **AI Product Builder**, and **Machine Learning Researcher** bridging cutting-edge computer vision, explainable artificial intelligence (XAI), and pragmatic product execution. He combines mathematical rigor in deep neural architectures (Vision Transformers, CNNs, Saliency Mapping) with end-to-end product leadership.

He is currently pursuing an **MBA in Generative AI & Product Management at IIT Patna (Indian Institute of Technology, Patna)** (2026–2028), having completed his **BE in Computer Science & Engineering (Honors in AI/ML)** from Chandigarh University (2022–2026). His published research in IEEE RMKMATE 2026 introduces novel transformer-aligned explanation maps for satellite imagery.

---

## 2. Core Educational Background & Credentials

| Institution | Degree / Specialization | Timeline | Core Focus |
|:---|:---|:---|:---|
| **Indian Institute of Technology, Patna (IIT Patna)** | MBA in Generative AI & Product Management | 2026 — 2028 | Foundation AI Models, Product Roadmapping, AI Ethics & Governance, Business Analytics, Vision / NLP Systems |
| **Chandigarh University** | BE in Computer Science & Engineering (Honors in AI/ML) | 2022 — 2026 | Machine Learning, Deep Learning, Computer Vision, Robotics, Data Structures, Distributed Systems |

---

## 3. Published Research

### *Explainable Vision Transformer for Satellite Image Analysis*
- **Conference / Venue**: IEEE RMKMATE 2026 (Oral Presentation & IEEE Xplore Published)
- **Paper Link**: [https://ieeexplore.ieee.org/document/11518743](https://ieeexplore.ieee.org/document/11518743)
- **Code Repository**: [https://github.com/Arshdeep-Yadav/satellite-vit-xai](https://github.com/Arshdeep-Yadav/satellite-vit-xai)
- **Abstract & Methodology**: Remote sensing architectures often function as uninterpretable black boxes. This research introduces a framework that fine-tunes ViT-B/16 on multispectral satellite datasets (SEN12MS) and integrates Attention Rollout with Grad-CAM patch saliency mapping. It achieves an IoU segmentation accuracy of **0.742** while producing human-interpretable attention attribution masks that eliminate spatial attention diffusion across deep transformer layers.

---

## 4. Professional & Industry Experience

### **Bluestock Fintech — SDE Intern → Team Lead** (May 2025 — June 2025)
- Led end-to-end engineering and product coordination for a high-traffic IPO tracking platform and analytics dashboard.
- Architected live market telemetry streams tracking over **$18.2M+ in 24h transaction volume** with sub-second data refresh intervals.
- Bridged engineering requirements across JavaScript frontend interfaces, Python REST APIs, and automated data pipelines.
- Implemented real-time financial data feeds with error recovery, minimizing feed dropouts to 0%.

---

## 5. Flagship Projects & Technical Case Studies

### 01. Explainable Vision Transformer for Satellite Image Analysis (XViT)
- **Domain**: Remote Sensing · Geospatial AI · Explainable AI (XAI) · Computer Vision
- **Stack**: Python, PyTorch, torchvision, timm, OpenCV, Grad-CAM, Matplotlib, SEN12MS dataset
- **Role**: Lead Researcher & First Author
- **Key Decisions**:
  - Adopted ViT-B/16 over traditional ResNets for global contextual reasoning across high-resolution geospatial tiles.
  - Combined Attention Rollout with Grad-CAM to overcome attention diffusion across deep transformer layers.
  - Implemented custom patch interpolation to handle variable-resolution satellite image inputs without loss of spatial fidelity.
- **Key Metric**: **0.742 IoU accuracy**, 12 attention heads analyzed, published in IEEE Xplore.

### 02. IPO Tracking Platform & Analytics Interface
- **Domain**: FinTech · Live Market Telemetry · Product Systems
- **Stack**: JavaScript, Python, REST APIs, HTML5/CSS3, Chart.js
- **Role**: Product Engineer & Team Lead
- **Key Decisions**:
  - Engineered client-side debounce mechanisms and WebSocket fallbacks for volatile financial ticker feeds.
  - Designed intuitive timeline visualizers for upcoming, open, and closed IPO subscriptions with retail quota indicators.
  - Normalized multi-source exchange data into unified JSON schema.
- **Key Metric**: Processed **$18.2M+ 24h tracked volume**, live production deployment.

### 03. Plant Disease Detection AI Scanner
- **Domain**: AgriTech · Computer Vision · Botanical Pathology
- **Stack**: TensorFlow, Keras, OpenCV, Streamlit, Python
- **Role**: ML Engineer & Full-Stack Builder
- **Key Decisions**:
  - Trained deep convolutional networks (CNNs) on 38 botanical disease classes with extensive data augmentation.
  - Deployed an interactive Streamlit application with visual confidence distributions for farmers.
  - Optimized inference time to under 120ms per image on edge CPU runtimes.
- **Key Metric**: **98.2% test accuracy** across 38 distinct plant diseases.

### 04. Deep Learning Real-Time Object Detection
- **Domain**: Computer Vision · Autonomous Systems · Edge AI
- **Stack**: YOLOv8 (Ultralytics), OpenCV, Python, PyTorch, CUDA
- **Role**: Computer Vision Engineer
- **Key Decisions**:
  - Implemented YOLOv8 architecture fine-tuned for dense urban and indoor object detection.
  - Optimized pipeline with OpenCV CUDA acceleration and multi-threaded video stream decoding.
  - Applied Kalman-filter based tracking for continuous object trajectory persistence across occlusions.
- **Key Metric**: **45 FPS** processing speed at **12ms inference latency**.

### 05. Physiological Stress Detection via Multimodal Biometrics
- **Domain**: HealthTech · Wearable Computing · Biomedical Signal Processing
- **Stack**: scikit-learn, Pandas, NumPy, SciPy, SHAP, Matplotlib
- **Role**: Data Scientist & ML Researcher
- **Key Decisions**:
  - Utilized WESAD dataset (Heart Rate Variability / SDNN, Galvanic Skin Response, 3-axis Accelerometry).
  - Applied robust z-score standardization per subject to normalize for individual physiological baseline variance.
  - Utilized SHAP feature importance to verify that the model relied on genuine physiological stress indicators rather than dataset artifacts.
- **Key Metric**: **0.91 F1-score**, outperforming baseline benchmarks by 12%.

### 06. Smart Embedded Assistive Hardware & Environmental Mesh
- **Domain**: IoT · Embedded Systems · Assistive Technology
- **Stack**: ESP32, Arduino C++, MQTT, Ultrasonic Sensors, GPS/GSM Modules
- **Role**: Hardware & Embedded Builder
- **Key Decisions**:
  - Designed dual ultrasonic sensory zones (knee height and head height) to detect hanging obstacles traditional canes miss.
  - Implemented sleep-mode power optimization on ESP32 to stretch battery life over continuous multi-hour usage.
  - Utilized vibration motor frequency escalation rather than loud beeps to preserve user dignity in public spaces.
- **Key Metric**: Working physical prototypes with **sub-50ms haptic alert response**.

---

## 6. Technical Skills & Tools Matrix

- **Machine Learning & Deep Learning**: PyTorch, TensorFlow, Keras, scikit-learn, Vision Transformers (ViT), YOLO, CNNs, Transfer Learning, HuggingFace, timm
- **Computer Vision & XAI**: OpenCV, Grad-CAM, Attention Rollout, Saliency Mapping, Object Detection, Semantic Segmentation, Multi-spectral Image Processing
- **AI Product Management & Strategy**: Product Roadmapping, User Research, Agile/Scrum, Jira, PRD Drafting, AI Ethics & Governance, Business Metrics, A/B Testing
- **Languages**: Python (Advanced), JavaScript (ES6+), C++, SQL, HTML5, CSS3, Markdown
- **Data Engineering & Analytics**: Pandas, NumPy, SciPy, Matplotlib, Seaborn, SHAP, Data Cleaning, Statistical Feature Engineering
- **Hardware, IoT & Cloud**: ESP32, Arduino, MQTT, Sensors & Microcontrollers, Git, GitHub, Docker, REST APIs, Vercel, Netlify

---

## 7. Operating Principles

1. **Build to deploy**: Every model is trained with runtime constraints, latency bounds, and production deployment in mind.
2. **Explain what you build**: Black-box AI creates liability. Interpretable attention and XAI create confidence.
3. **Cross-pollinate domains**: Bridging computer vision, AgriTech, FinTech, and IoT to find non-obvious engineering solutions.
4. **Ship fast, measure everything**: Prioritize software that solves real pain for real users over academic isolation.

---

## 8. Verified Links & Citations

- **Portfolio**: [https://arshdeep.works/](https://arshdeep.works/)
- **IEEE RMKMATE 2026 Paper**: [https://ieeexplore.ieee.org/document/11518743](https://ieeexplore.ieee.org/document/11518743)
- **GitHub**: [https://github.com/Arshdeep-Yadav](https://github.com/Arshdeep-Yadav)
- **LinkedIn**: [https://www.linkedin.com/in/arshdeep-yadav](https://www.linkedin.com/in/arshdeep-yadav)
- **IIT Patna MBA GAIPM**: [https://admissions.iitp-cep.in/mba-gaipm](https://admissions.iitp-cep.in/mba-gaipm)
- **LLM Context Document**: [https://arshdeep.works/llm.md](https://arshdeep.works/llm.md)
- **LLMs.txt Standard File**: [https://arshdeep.works/llms.txt](https://arshdeep.works/llms.txt)
