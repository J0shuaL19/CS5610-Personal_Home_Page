# Ziyong Liu - Personal Homepage Design Document

- **Author:** Ziyong Liu
- **Class:**
  [CS5610 Web Development, Fall 2026](https://johnguerra.co/classes/webDevelopment_online_fall_2026/)
- **Planned website:**
  [Ziyong Liu's Personal Homepage](https://j0shual19.github.io/CS5610-Personal_Home_Page/)

## Project Description

This project is a personal homepage for Ziyong Liu, a fourth-semester Align MS in
Computer Science student at Northeastern University's Silicon Valley campus. The site
introduces his background, selected projects, technical skills, interests, and contact
information.

The website has three pages:

- **Home (`index.html`)** - A personal introduction, background, interests, and selected
  software projects.
- **Skills (`skills.html`)** - Technical skills from the author's résumé, with an
  original JavaScript category filter.
- **Contact (`contact.html`)** - Public contact methods and an explanation of how AI
  assisted with the page.

The site uses semantic HTML5, CSS Grid and Flexbox, and vanilla JavaScript ES6 modules.
It does not use a backend, jQuery, Bootstrap, or live AI calls.

## Target Customers

The main visitors are instructors evaluating the assignment, classmates who want to
learn about Ziyong's background, and recruiters or collaborators who want a quick view
of his projects and skills.

## User Personas

### Persona 1 - Maya, a Classmate

Maya is another computer science student who wants to understand Ziyong's background,
technical interests, and current project experience. She needs a clear site that works
well on a phone or laptop.

### Persona 2 - Daniel, a Software Recruiter

Daniel reviews student profiles and wants to quickly identify relevant technologies, see
examples of project work, and find a professional contact method.

## User Stories

### Story 1 - Learn About the Author

> As a classmate, I want to read a short personal introduction so that I can understand
> Ziyong's background and interests.

### Story 2 - Review Technical Skills

> As a recruiter, I want to filter skills by category so that I can quickly find the
> technologies relevant to a role.

### Story 3 - Make Contact

> As a potential collaborator, I want to find Ziyong's email and GitHub profile so that
> I can discuss a project or technical idea.

## Original JavaScript Feature

The Skills page contains a category filter written in vanilla JavaScript. Visitors can
show all skill groups or focus on Languages, Frameworks, Data & APIs, AI & LLM, or
Delivery & Tools. The script updates both the visible cards and the buttons' accessible
pressed state.

## Design Mockups

### Home

```text
+------------------------------------------------------+
| Ziyong Liu                   Home Skills Contact     |
+------------------------------------------------------+
| Computer Science Student              +----------+  |
| Hi, I am Ziyong.                      |    ZL    |  |
| Short introduction                    +----------+  |
| [Explore skills] [Contact me]                        |
+------------------------------------------------------+
| About me                                            |
+------------------------------------------------------+
| Selected project | Selected project | Project       |
+------------------------------------------------------+
```

### Skills

```text
+------------------------------------------------------+
| Ziyong Liu                   Home Skills Contact     |
+------------------------------------------------------+
| Skills and tools                                    |
| [All] [Languages] [Frameworks] [Data] [AI] [Tools]  |
| +----------------------+ +-------------------------+ |
| | Skill category       | | Skill category          | |
| +----------------------+ +-------------------------+ |
+------------------------------------------------------+
```

### Contact

```text
+------------------------------------------------------+
| Ziyong Liu                   Home Skills Contact     |
+------------------------------------------------------+
| Let us connect                                      |
| +-------------+ +-------------+ +----------------+  |
| | Email       | | GitHub      | | Location       |  |
| +-------------+ +-------------+ +----------------+  |
| AI assistance disclosure                            |
+------------------------------------------------------+
```

## Accessibility and Responsive Design

The site uses landmarks, headings in order, real links and buttons, form-independent
keyboard controls, visible focus styles, sufficient color contrast, and responsive
single-column layouts on smaller screens. The author's phone number is intentionally not
published. All pages will be checked with the W3C Markup Validation Service before final
submission.
