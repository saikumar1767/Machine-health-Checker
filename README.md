# Factory Health Monitor - Authentication, State Management, and Persistence

### The Application

The application you'll be working on is a tool for evaluating the health of various machines in an automobile manufacturing plant. This plant features a range of machines, each with specific data points that you will use to assess the condition of the production process.

#### Machines and Their Variables

1. **Welding Robots**

   - Welding Robot Error Rate
   - Welding Arm Vibration Level
   - Electrode Wear
   - Gas Shielding Pressure
   - Welding Wire Feed Rate
   - Arc Stability
   - Weld Seam Width
   - Cooling System Efficiency

2. **Painting Stations**

   - Paint Flow Rate
   - Paint Pressure
   - Paint Color Consistency
   - Paint Nozzle Condition

3. **Assembly Lines**

   - Part Alignment Accuracy
   - Assembly Line Speed
   - Component Fitting Tolerance
   - Conveyor Belt Speed

4. **Quality Control Stations**
   - Inspection Camera Calibration
   - Inspection Light Intensity
   - Inspection Software Version
   - Inspection Criteria Settings

## Repository Structure

The repository is structured as follows:

```
├── native-app/
│   ├── source code files...
│   ├── README.md               # The README file for running the React Native Mobile app
│   └── ...
│
├── backend/
│   ├── source code files...
│   ├── README.md               # The README file for running the API Backend
│   └── ...
│
├── MachineHealth.apk           # The compiled android app for running on a device or emulator (if helpful)
├── README.md                   # This README file
```

## Running the App Locally

To run the Machine Health Evaluation app locally, you'll need to set up and run both the React Native app and the API backend separately. Each of the respective folders are in this director and each have their own README files to help you get started.

To use the Machine Health Evaluation app locally, you'll need to keep both the API and the React Native app running simultaneously. It's recommended to open separate terminal/command windows for each and run them in parallel.

- In one terminal window, navigate to the `backend` folder and run the API backend.
- In another terminal window, navigate to the `native-app` folder and run the React Native app.

Keep in mind that the React Native app relies on the API to fetch and calculate machine health data. Ensure that the API is accessible to the app for it to function correctly.

For specific details on running the API and React Native app, refer to their respective README files in their respective folders.

1. **Authentication and Session Management:**

   - Implement user authentication in the Expo mobile app. Users should be able to log in securely using credentials.
   - Manage user sessions and ensure that users remain authenticated between app sessions.

2. **Data State Management:**

   - Review and update (as needed) the existing state management for data returned by the API. Feel free to bring in a state management library if it'd be helpful.
   - Ensure that the app efficiently manages and updates the state when new data points and scores are fetched.

3. **Persistence Layer on the Backend:**

   - Implement a persistence layer on the backend to store historical data points and scores for each user/machine.
   - When a new data point or score is recorded, ensure it is stored in the persistence layer for future retrieval.

4. **Visualize History (Optional):**
   - Implement a section to show the history of scores with trends over time.
   - Include visualizations such as charts or graphs to represent the trends in machine health scores.

