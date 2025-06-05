# Truck Delivery Simulator

A simulation of how many truck needed to operate most efficiently in with specific truck delivery/operational time (in days), and maintenance duration (in days) of truck.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) v22.11.0 or higher
- [npm](https://www.npmjs.com/) v10.9.0 or higher

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/hizas-sabilal/truck-delivery-simulator.git
    ```

2. Navigate to the project directory
    ```bash
    cd truck-delivery-simulator
    ```

3. Install dependencies
    ```bash
    npm install
    ```

## Usage

- Build the project
    ```bash
    npm run build
    ```

- Run the project
    ```bash
    npm start
    ```

- For development (watch mode)
    ```bash
    npm run dev
    ```

## Setup

- Configure simulation parameters by creating a .env file in the root directory with:

    ```bash
    OPERATIONAL_TIME=3     # Operational duration in days
    MAINTENANCE_DURATION=1 # Maintenance duration in days
    ```

### Alternative Setup Methods

- Windows (Command Prompt):

    ```bash
    echo OPERATIONAL_TIME=3 > .env && echo MAINTENANCE_DURATION=1 >> .env
    ```

- macOS/Linux (Terminal):
    ```bash
    echo -e "OPERATIONAL_TIME=3\nMAINTENANCE_DURATION=1" > .env
    ```
