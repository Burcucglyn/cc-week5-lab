# Week 5 Docker Learning Lab

A simple Node.js application created for learning Docker containerisation fundamentals.

## About This Project

This repository contains the initial Docker exercises from Week 5 of the cloud computing module. The project features a basic Express.js application that was used to learn Docker concepts including image building, container management, and deployment workflows.

## What This Application Does

A minimal Express.js server that:

- Runs on port 3000
- Returns a simple message confirming successful containerisation
- Demonstrates basic Docker containerisation principles

## Application Code

The application consists of a single endpoint:

```javascript
app.get('/', (req,res) => {
    res.send('I just shipped my app to a container!')
})
```

## Project Structure

```
cc-week5-lab/
├── app.js
├── package.json
├── package-lock.json
├── Dockerfile
├── commands.md
└── node_modules/
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- Docker installed
- Basic understanding of command line operations

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/Burcucglyn/cc-week5-lab.git
cd cc-week5-lab
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm start
```

The application will start on port 3000. Visit `http://localhost:3000` to see the message.

## Docker Deployment

### Creating the Dockerfile

Create a file named `Dockerfile` with the following content:

```dockerfile
FROM alpine
RUN apk add --update nodejs npm
COPY . /src
WORKDIR /src
EXPOSE 3000
ENTRYPOINT ["node", "./app.js"]
```

### Dockerfile Explanation

- `FROM alpine` - Uses Alpine Linux as the base image for minimal size
- `RUN apk add --update nodejs npm` - Installs Node.js and npm using Alpine package manager
- `COPY . /src` - Copies all application files to `/src` directory in the container
- `WORKDIR /src` - Sets the working directory to `/src`
- `EXPOSE 3000` - Documents that the application listens on port 3000
- `ENTRYPOINT ["node", "./app.js"]` - Defines the command to run when container starts

### Building the Docker Image

Build the image with a tag:

```bash
docker image build -t mini-test-app-image:1 .
```

This command:

- Builds an image from the Dockerfile in the current directory
- Tags it as `mini-test-app-image:1`
- Uses the current directory as build context

### Running the Container

Run the containerised application:

```bash
docker container run -d --name test-web --publish 80:3000 mini-test-app-image:1
```

Parameters explained:

- `-d` - Runs container in detached mode (background)
- `--name test-web` - Assigns a name to the container
- `--publish 80:3000` - Maps host port 80 to container port 3000
- `mini-test-app-image:1` - Specifies which image to use

### Accessing the Application

Once running, access the application at:

- Local: `http://localhost`
- External: `http://YOUR_SERVER_IP`

### Container Management Commands

View running containers:

```bash
docker ps
```

View all containers (including stopped):

```bash
docker ps -a
```

Stop a container:

```bash
docker stop test-web
```

Start a stopped container:

```bash
docker start test-web
```

Remove a container:

```bash
docker rm test-web
```

View container logs:

```bash
docker logs test-web
```

Access container shell:

```bash
docker exec -it test-web sh
```

## What I Learned

### Docker Fundamentals

- How to write effective Dockerfiles
- Understanding Docker image layers
- Difference between images and containers
- Container lifecycle management
- Port mapping concepts

### Best Practices

- Using lightweight base images (Alpine Linux)
- Proper working directory configuration
- Exposing ports for documentation
- Naming containers meaningfully
- Running containers in detached mode

### Troubleshooting Skills

- Resolving port conflicts
- Checking container logs for debugging
- Managing container states
- Understanding build context
- Inspecting running containers

## Technologies Used

- Node.js
- Express.js
- Docker
- Alpine Linux

## Dependencies

```json
{
  "express": "^5.1.0",
  "nodemon": "^3.1.11"
}
```

## Development Notes

This application was created as a learning exercise and intentionally kept simple to focus on Docker concepts rather than application complexity. The main learning outcomes were understanding how to containerise Node.js applications and manage Docker containers effectively.

## Related Repo:

This learning exercise was followed by containerising a more complex application with authentication:

[Mini Film Auth - Dockerised REST API](https://github.com/Burcucglyn/CC-week4-Mini-Film-Auth)
