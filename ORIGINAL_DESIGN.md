# Original Design Documentation

This document outlines the architecture and technology stack of the original OpenSim Viewer application.

## 1. Project Overview

The OpenSim Viewer is a web-based application designed to visualize and interact with OpenSim models and motion data. It allows users to upload OpenSim files (e.g., `.osim`, `.trc`, `.mot`) and view them as 3D models in the browser.

## 2. Frontend

The frontend is a single-page application (SPA) built using React.

*   **Framework:** [React](https://reactjs.org/) (using [Create React App](https://create-react-app.dev/))
*   **UI Library:** [Material-UI](https://mui.com/)
*   **State Management:** [MobX](https://mobx.js.org/)
*   **3D Visualization:**
    *   [three.js](https://threejs.org/)
    *   [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
    *   [@react-three/drei](https://github.com/pmndrs/drei)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Internationalization (i18n):** [i18next](https://www.i18next.com/)
*   **HTTP Client:** [axios](https://axios-http.com/)
*   **Notifications:** [notistack](https://iamhosseindhv.com/notistack)
*   **Fullscreen:** [screenfull](https://github.com/sindresorhus/screenfull.js)

## 3. Backend

The backend is a serverless application running on AWS Lambda.

*   **Platform:** [AWS Lambda](https://aws.amazon.com/lambda/)
*   **Language:** [Python](https://www.python.org/)
*   **Core Logic:** The backend's primary function is to convert OpenSim files into the GLTF format for 3D visualization. This is handled by a custom Python module called `osimConverters`.
*   **File Storage:** [AWS S3](https://aws.amazon.com/s3/) is used to store both the uploaded OpenSim files and the converted GLTF files.
*   **Trigger:** The Lambda function can be triggered by:
    *   A direct file upload to a specific S3 bucket.
    *   An API Gateway endpoint that receives a JSON payload with either a reference to an S3 object or a URL to an OpenSim file.

### `osimConverters` Module

This module contains the core logic for converting various OpenSim file formats to GLTF. It includes the following scripts:

*   `convertC3D2Gltf.py`
*   `convertMotForce2Gltf.py`
*   `convertOsim2Gltf.py`
*   `convertOsimZip2Gltf.py`
*   `convertTrc2Gltf.py`
*   `DecorativeGeometryImplementationGltf.py`
*   `openSimData2Gltf.py`

## 4. DevOps

*   **Build Tool:** [react-scripts](https://create-react-app.dev/docs/available-scripts)
*   **Testing:**
    *   [Jest](https://jestjs.io/)
    *   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
*   **CI/CD:** [GitHub Actions](https://github.com/features/actions) are used to automate the testing and deployment of the application.
