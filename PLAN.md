# Refined Project Plan: OpenSim Lifter Visualization

This document outlines the plan for building a lightweight and modern web application for lifters to visualize and analyze their squat, bench press, and deadlift techniques using OpenSim models.

## 1. Project Goal

Create a fast, intuitive, and mobile-friendly React application that allows users to:
*   Load and view 3D models of the "big 3" powerlifting exercises.
*   Analyze the biomechanics of the lifts.
*   Compare different techniques.

## 2. Technology Stack

The proposed stack is modern, lightweight, and focuses on a great developer experience.

### Frontend

*   **Framework:** React (with Vite for a fast development environment)
*   **UI:** Tailwind CSS for a utility-first, customizable design.
*   **State Management:** Zustand for simple and scalable state management.
*   **3D Visualization:**
    *   `@react-three/fiber` (a React renderer for three.js)
    *   `@react-three/drei` (helpers for `@react-three/fiber`)
*   **Routing:** React Router for client-side routing.
*   **Data Fetching:** `axios` or `fetch` API.

### Backend (Phase 3 - Optional)

*   **Framework:** FastAPI (Python) for a high-performance API.
*   **Deployment:** Docker for containerization.

## 3. Development Phases

### Phase 1: Foundation and Core Viewer

*Goal: Build the basic application shell and a 3D viewer that can load a sample model.*

1.  **Project Setup:**
    *   Confirm the Vite project is correctly set up in the `light-weight` directory.
    *   Install necessary dependencies: `tailwindcss`, `zustand`, `@react-three/fiber`, `@react-three/drei`, `react-router-dom`.
2.  **UI Components:**
    *   Create a responsive layout with a main content area for the viewer and a sidebar for controls.
    *   Develop basic UI components using Tailwind CSS: buttons, sliders, and panels.
3.  **3D Viewer:**
    *   Implement a basic 3D scene with `@react-three/fiber`.
    *   Add camera controls (orbit, pan, zoom) using `@react-three/drei`.
    *   Add a ground plane and basic lighting.
4.  **Sample Model:**
    *   Load and display a pre-converted GLTF model (e.g., the `arm26.gltf` from the `public/builtin` folder) to verify the viewer is working.

### Phase 2: "Big 3" Lifts Integration

*Goal: Integrate the squat, bench press, and deadlift models and their animations.*

1.  **Model Sourcing and Conversion:**
    *   **Source Models:** Obtain the OpenSim models mentioned by the user:
        *   Lifting Full-Body Model (LFB) for deadlifts.
        *   Deep Squat High-Flexion Model for squats.
        *   OpenSim Upper-Extremity (Shoulder) Model for bench press.
    *   **Conversion:** Use the existing Python scripts in `src/backend/osimConverters` to convert these models and their corresponding motion data (`.trc` files) to GLTF format.
    *   **Organize Models:** Store the converted GLTF files in the `light-weight/public/models` directory.
2.  **Model Loading and Selection:**
    *   Create a UI for users to select which lift (squat, bench, deadlift) they want to view.
    *   Implement the logic to dynamically load the selected GLTF model into the viewer.
3.  **Animation Control:**
    *   Implement controls for playing, pausing, and scrubbing through the animation of the selected lift.
    *   Display the current time/frame of the animation.

### Phase 3: Analysis and Advanced Features

*Goal: Add features that allow for deeper analysis of the lifts.*

1.  **Side-by-Side Comparison:**
    *   Allow users to load two different models/animations side-by-side for comparison.
    *   Synchronize the playback of the two animations.
2.  **Data Visualization:**
    *   Investigate methods to extract and display relevant data from the models (e.g., joint angles, bar path).
    *   Display this data in charts or graphs that are synchronized with the animation.
3.  **Local Backend (Optional):**
    *   If client-side processing is not sufficient, develop a local FastAPI server to handle tasks like on-the-fly model conversion or data analysis.
    *   This would allow users to upload their own `.osim` or `.trc` files for analysis.

## 4. Next Steps

*   **Confirm Plan:** Review and confirm this refined plan.
*   **Start Phase 1:** Begin with the project setup and core UI development.