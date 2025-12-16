---
sidebar_position: 3
---

import TranslateButton from '@site/src/components/TranslateButton';
import PersonalizeButton from '@site/src/components/PersonalizeButton';

<TranslateButton />
<PersonalizeButton />

# Chapter 3: ROS 2 Basics

**Reading Time: 6 minutes**

## What is ROS 2?

Robot Operating System 2 (ROS 2) is an open-source framework for building robot software. Think of it as the "nervous system" that connects all parts of a robot.

## Core Concepts

### Nodes
**Independent processes** that perform specific tasks

Example nodes:
- `camera_node` - Captures images
- `perception_node` - Detects objects
- `navigation_node` - Plans paths

### Topics
**Data highways** where nodes publish and subscribe to messages
```
camera_node → /image → perception_node
```

**Publish-Subscribe Pattern**:
- Publishers send data
- Subscribers receive data
- Many-to-many communication

### Messages
**Standardized data structures**

Common message types:
- `sensor_msgs/Image` - Camera images
- `geometry_msgs/Twist` - Velocity commands
- `nav_msgs/Odometry` - Position and orientation

### Services
**Request-response** communication for actions

Example:
```
Request: "Take a photo"
Response: "Photo saved to /images/photo1.jpg"
```

## ROS 2 Architecture
```
Node A ──topic──> Node B
   │              │
   └──service────>│
```

**Distributed System**:
- Nodes can run on different computers
- Communication over network
- Scalable and flexible

## Package Structure
```
my_robot_package/
├── launch/       # Startup scripts
├── config/       # Parameters
├── src/          # Source code
└── package.xml   # Package metadata
```

## Launch Files

Start multiple nodes with one command:
```python
# launch/robot.launch.py
Node(package='camera', executable='camera_node'),
Node(package='perception', executable='object_detector'),
Node(package='control', executable='motor_controller')
```

## Parameters

Configure nodes without changing code:
```yaml
# config/camera.yaml
camera:
  fps: 30
  resolution: "1920x1080"
  exposure: "auto"
```

## Why ROS 2?

✅ **Modular** - Easy to add/remove features
✅ **Reusable** - Use community packages
✅ **Scalable** - From hobby robots to industrial systems
✅ **Real-time** - Critical for robotic control
✅ **Industry Standard** - Used by leading robotics companies

## Real-World Usage

- **Tesla Bot** - Motion control and perception
- **Warehouse Robots** - Navigation and coordination
- **Research Robots** - Rapid prototyping

## Key Takeaway

ROS 2 provides the communication infrastructure that allows different robot components to work together seamlessly, making it the foundation of modern robotics software.

---

**Next**: [Chapter 4: Simulation →](./chapter4.md)