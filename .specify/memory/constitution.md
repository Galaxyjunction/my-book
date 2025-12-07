<!--
SYNC IMPACT REPORT
==================
Version Change: [TEMPLATE] → 1.0.0
Change Type: MINOR (Initial constitution establishment)
Date: 2025-12-07

Modified Principles:
- All principles newly defined for educational textbook project

Added Sections:
- I. Educational Clarity
- II. Hands-On Learning
- III. Accessibility for Beginners
- IV. Comprehensive Modern Coverage
- V. Interactive & Engaging
- VI. Technical Accuracy
- Content Standards
- Development Workflow
- Governance

Removed Sections: None

Templates Requiring Updates:
- ⚠ .specify/templates/plan-template.md (pending review)
- ⚠ .specify/templates/spec-template.md (pending review)
- ⚠ .specify/templates/tasks-template.md (pending review)
- ⚠ .specify/templates/commands/*.md (pending review)

Follow-up TODOs: Review and align all templates with educational focus
-->

# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Educational Clarity

All content MUST prioritize pedagogical soundness over technical exhaustiveness. Each chapter,
section, and module MUST begin with explicit learning objectives stated in measurable terms.
Explanations MUST progress from foundational concepts to advanced topics using scaffolded
learning approaches. Jargon MUST be defined on first use, with a maintained glossary.

**Rationale**: Students learn best when complexity is introduced systematically. Clear learning
objectives enable self-assessment and provide instructors with assessment criteria.

### II. Hands-On Learning

Every theoretical concept MUST be accompanied by at least one practical, executable code example.
Examples MUST be complete, runnable, and tested in the target environment (ROS 2, Gazebo, Unity,
Isaac Sim, etc.). Code snippets MUST include setup instructions, expected outputs, and common
troubleshooting steps. Laboratory exercises MUST build incrementally on previous examples.

**Rationale**: Robotics and physical AI are inherently practical disciplines. Students retain
knowledge through active experimentation and debugging real systems.

### III. Accessibility for Beginners

Content MUST assume students have basic programming knowledge (Python, introductory CS) but
minimal robotics experience. Prerequisites MUST be explicitly stated at module beginnings.
Complex mathematical concepts (kinematics, dynamics, optimization) MUST be introduced with
intuitive explanations before formal notation. Alternative explanations MUST be provided for
diverse learning styles (visual diagrams, code analogs, physical intuitions).

**Rationale**: Robotics attracts students from diverse backgrounds. Lowering entry barriers
increases accessibility without sacrificing rigor.

### IV. Comprehensive Modern Coverage

The textbook MUST cover contemporary industry-standard tools and frameworks: ROS 2 (not ROS 1),
current simulation platforms (Gazebo Classic/Harmonic, Unity Robotics Hub, NVIDIA Isaac Sim),
and emerging paradigms (Vision-Language-Action models, foundation models for robotics). Deprecated
technologies MUST be clearly marked. Version numbers MUST be specified for all software
dependencies.

**Rationale**: Students entering the workforce need skills aligned with current industry practices.
Outdated content erodes trust and educational value.

### V. Interactive & Engaging

Where feasible, content SHOULD incorporate interactive elements: embedded simulation demos,
visualization widgets, or links to companion Jupyter notebooks. The integrated RAG chatbot
MUST provide contextual assistance for code examples and concept clarification. Chapters SHOULD
include reflection questions, challenge problems, and project ideas to encourage deeper engagement.

**Rationale**: Passive reading yields lower retention than active interaction. Modern web
technologies (Docusaurus, React) enable rich educational experiences.

### VI. Technical Accuracy

All code examples, API references, and technical explanations MUST be verified against official
documentation and tested in representative environments. Mathematical formulations MUST cite
authoritative sources (textbooks, research papers). Claims about software capabilities or
performance MUST be substantiated or clearly marked as approximations. Errors discovered MUST
be corrected promptly with errata tracking.

**Rationale**: Technical errors undermine student confidence and propagate misconceptions.
Accuracy is non-negotiable in engineering education.

## Content Standards

### Module Structure

Each of the four main modules (ROS 2 Fundamentals, Simulation Environments, NVIDIA Isaac
Ecosystem, Vision-Language-Action Models) MUST follow a consistent structure:

1. **Introduction**: Motivation, real-world applications, learning objectives
2. **Conceptual Foundation**: Theory, architectural overviews, key terminology
3. **Hands-On Tutorials**: Step-by-step guided examples with code
4. **Advanced Topics**: Optimization, integration patterns, research frontiers
5. **Assessment**: Self-check questions, lab exercises, capstone project ideas

### Code Examples

- All code examples MUST be syntax-highlighted and include language identifiers
- Python code MUST follow PEP 8 style guidelines
- C++ code (for ROS 2 nodes) MUST follow ROS 2 style conventions
- Code MUST include inline comments explaining non-obvious logic
- File structure and imports MUST be shown for multi-file examples

### Documentation Requirements

- API references MUST link to official documentation
- Installation instructions MUST specify OS compatibility (Ubuntu 22.04/24.04, Windows, macOS)
- Version matrices MUST be maintained for software dependencies (ROS 2 Humble/Iron, Python 3.10+)
- Troubleshooting sections MUST address common student errors identified through feedback

## Development Workflow

### Content Review Process

1. **Technical Review**: Subject matter expert verifies accuracy, completeness, and currency
2. **Pedagogical Review**: Educational specialist assesses clarity, scaffolding, and accessibility
3. **Code Testing**: All examples executed in clean environments matching student setups
4. **Student Beta Testing**: Representative students provide usability feedback before release

### Quality Gates

- No chapter releases without at least one complete, tested code example
- No API references without version verification (documentation links checked)
- No mathematical content without citation or derivation walkthrough
- No deprecated technology references without migration guidance

### RAG Chatbot Integration

- Chatbot training data MUST stay synchronized with textbook content updates
- Chatbot responses MUST cite specific textbook sections when answering queries
- Chatbot limitations MUST be communicated to students (e.g., cannot debug arbitrary code)

## Governance

This constitution supersedes ad-hoc content decisions and establishes the quality baseline for
all textbook materials. Amendments require:

1. Written proposal with rationale
2. Review by core content team (subject matter experts + educators)
3. Impact assessment on existing content
4. Migration plan for affected chapters

**Compliance**: All content pull requests MUST demonstrate alignment with core principles.
Reviewers MUST verify adherence to content standards. Complexity or deviations MUST be
explicitly justified with pedagogical or technical rationale.

**Guidance File**: For day-to-day development practices, consult `CLAUDE.md` in the repository
root for build commands, architecture details, and tooling workflows.

**Version**: 1.0.0 | **Ratified**: 2025-12-07 | **Last Amended**: 2025-12-07
