# Project Plan

This document outlines the plan for building the OpenSim lifter visualization application.

## Project Goal

Build a web application for lifters to visualize how setup and technique affect their performance using OpenSim models.

## Technology Stack

### Frontend

*   **Framework:** React (with Vite)
*   **UI Library:** Tailwind CSS
*   **State Management:** Zustand
*   **3D Visualization:**
    *   [three.js](https://threejs.org/)
    *   [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
    *   [@react-three/drei](https://github.com/pmndrs/drei)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **HTTP Client:** [axios](https://axios-http.com/)

### Backend (Optional)

*   **Language:** [Python](https://www.python.org/)
*   **Framework:** [FastAPI](https://fastapi.tiangolo.com/)

## Development Phases

### Phase 1: Core Frontend Development

1.  **Component Redesign:** Continue redesigning the existing React components from the original project using Tailwind CSS.
2.  **State Management:** Integrate Zustand for managing the application's state.
3.  **3D Visualization:**
    *   Load and display pre-converted GLTF models.
    *   Implement controls for manipulating the camera (zoom, pan, rotate).
    *   Implement controls for playing, pausing, and scrubbing through animations.
4.  **Routing:** Set up the basic routing for the application (e.g., home page, viewer page).

### Phase 2: Model Integration and Visualization

1.  **Model Conversion:** Convert the OpenSim models for the "big 3" lifts (squat, bench press, deadlift) to GLTF format using the provided conversion scripts.
2.  **Model Loading:** Implement the logic to load and display the pre-converted GLTF models in the 3D viewer.
3.  **Animation Loading:** Implement the logic to load and apply motion data to the models.
4.  **UI for Model/Motion Selection:** Create a user interface for selecting different models and motions.

### Phase 3: Advanced Features and Refinements (Future)

*   **Side-by-Side Comparison:** Implement a feature to compare two different lifting techniques side-by-side.
*   **Data Visualization:** Display relevant data (e.g., joint angles, forces) as charts or graphs.
*   **User Accounts:** (Optional) Add user accounts to save and manage their data.
*   **Local Server:** (Optional) Develop a local FastAPI server if any backend processing is required.
