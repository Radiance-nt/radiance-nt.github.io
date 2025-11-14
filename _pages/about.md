---
permalink: /
title: "🔮 Zhanhui Lin (林展辉) - Profile"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## 👨‍💻 About Me

I am a Master's student in AI and Robotics at The Chinese University of Hong Kong, Shenzhen (CUHK-SZ), with a Bachelor's degree in Computer Science from Xi'an Jiaotong University.
My primary research interest is in developing intelligent agents capable of robust decision-making. To achieve this, I draw upon my expertise across Robotics, Machine Learning, and Computer Science. While my core focus is on Reinforcement Learning, I also keep pace with recent advancements in generative AI, including Large Language Models (LLMs) and Diffusion/Flow Models. My approach is grounded in strong computer science fundamentals and practical engineering skills, enabling me to build efficient and reliable real-world systems.

## 📰 Publication

**Robust Self-Training with Closed-loop Label Correction for Learning from Noisy Labels** <u>Zhanhui Lin</u>, Yanlin Liu, Sanping Zhou.  
[[PDF]]( /files/Robust_Self_Training_with_Closed_loop_Label_Correction_for_Learning_from_Noisy_Labels.pdf)

- Introduced an efficient, stable, and scalable framework** for training deep neural networks on datasets with noisy labels. Our method effectively mitigates performance degradation caused by label noise.

  * Proposed a novel purification paradigm where a lightweight correction network (2-layer MLP), guided by a small set of clean data, dynamically refines the labels of a large-scale noisy dataset to supervise the main classifier.

  * Designed a robust correction mechanism that balances high expressiveness with theoretical stability. Our approach is guaranteed to be risk-non-increasing, which effectively prevents error amplification and model collapse during training.

  * Achieved state-of-the-art performance while requiring substantially less training time and computational resources than existing methods.

<div style="display: flex; justify-content: center; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
  <img src="https://s1.imagehub.cc/images/2025/08/07/fd18d10846ad8c2c550fcfbd397909e0.png" alt="Robust Self-Training with Closed-loop Label Correction" width="600" style="margin-bottom: 0.5em; margin-top: 0.8em; max-width: 100%;"/>
  <!-- <img src="https://s1.imagehub.cc/images/2025/08/07/57810e9cc40ff736b712cb02a0edadd6.png" alt="Robust Self-Training with Closed-loop Label Correction" height="150" style="margin-bottom: 0.5em; margin-top: 0.8em; max-width: 100%;"/> -->
</div>

## 🚀 Selected Projects & Experience

### Robotics & AI
- **Shanghai AI Laboratory - Research Intern** (2025.10 -- Present)
  - Reproduced foundational models such as π series and VLAC. Future work will focus on training Vision-Language-Action (VLA) models with Real-World Reinforcement Learning (RL), exploring efficient applications in robot behavior understanding and action generation.

- **Visionless Quadruped Locomotion on Complex Terrains (Intern @ Magiclab/Dreame)**
  - Developed a reinforcement learning policy for a quadruped robot, enabling it to navigate challenging terrains (18cm steps, 30cm platforms) with high stability.
  - Successfully demonstrated Sim2Real transfer and built a flexible C++ deployment framework and a high-fidelity MuJoCo Sim2Sim environment.

<div style="text-align: center;">
<img src="https://i.mji.rip/2025/08/07/62dbab17e067b4161d6c1440d383ad5f.gif" alt="Visionless Quadruped Locomotion" width="500" style="margin-bottom: 0.5em; margin-top: 0.8em;"/>
</div>

- **Human-Swarm Trust Transfer (Intern @ Kent State University)**
  - Investigated trust transfer mechanisms in human-swarm interaction and developed a method to predict trust using swarm features.
  - Implemented a distributed swarm control system with formation maintenance and obstacle avoidance in a custom AirSim environment.
  - [[Code]](https://github.com/Radiance-nt/Swarm-Formation-Airsim)

<div style="text-align: center;">
<img src="https://i.mji.rip/2025/08/07/71727b10b70a09eedafbe884521238cb.gif" alt="Distributed swarm control system" width="500" style="margin-bottom: 0.5em; margin-top: 0.8em;"/>
</div>

- **Robomaster Sentry - 3D SLAM (Competition Champion of Northwest China Region)**
  - Developed a high-performance 3D SLAM solution for a sentry robot, significantly improving its localization and strategic capabilities in dynamic environments.
  - [[Code]](https://github.com/Radiance-nt/Sentry)

<div style="text-align: center;">
<img src="https://s1.imagehub.cc/images/2025/08/07/b2586b402d5d6096b8080f1cd99fc873.png" alt="Sentry in the simulation environment" width="500" style="margin-bottom: 0.5em; margin-top: 0.8em;"/>
</div>

- **Inverted Pendulum Control with LQR/MPC**
  - Designed an easy-to-use framework in Gazebo for learning and testing classic control algorithms.
  - Implemented both LQR and MPC controllers in Python and C++ within a ROS environment to stabilize the cart-pole system.
  - [[Code]](https://github.com/Radiance-nt/Cart_Pole_Inverted_Pendulum_Control)

<div style="text-align: center;">
<img src="https://i.mji.rip/2025/08/07/8c643891682fc39e26e420b6b6cd48fe.gif" alt="Inverted Pendulum Control with LQR/MPC" width="500" style="margin-bottom: 0.5em; margin-top: 0.8em;"/>
</div>

### Core Computer Science Project & Experience
- **Distributed Key-Value Store (Project for MIT 6.824)**
  - Implemented the Raft consensus protocol in Go to build a fault-tolerant, sharded key-value database service from scratch.

- **Relational Database Engine (Project for CMU 15-445)**
  - Engineered core database components in C++, including a buffer pool manager, an extendable hash index, a B+ Tree index, and a query execution engine.

- **System Development (Intern @ Meituan)**
  - Developed and maintained a cost management system for B2B services, implementing a back-end framework for timed task scheduling to improve automation.

## 🎓 Education
- **M.Sc. in AI and Robotics**
  - *The Chinese University of Hong Kong, Shenzhen* (2024.09 - Present)
- **B.Eng. in Computer Science and Technology**
  - *Xi'an Jiaotong University* (2019.09 - 2023.06)

## 🛠️ Technical Skills
- **Domains**:
  - Reinforcement Learning, Imitation Learning, SLAM, Control Theory, Machine Learning (Semi-supervised, Meta, ...)
- **Languages & Tools**:
  - **C++** (STL, Eigen), **Python** (Jax, PyTorch), **Go**, ROS, Linux, Git, Docker
