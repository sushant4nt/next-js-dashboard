# Contributing to GQ United Cricket Club Website

Thank you for your interest in contributing to the GQ United CC website! This document provides guidelines and information for contributors.

## 🏏 About Contributing

We welcome contributions from cricket enthusiasts, developers, and community members. Whether you're fixing bugs, adding features, improving documentation, or suggesting enhancements, your contributions help make our cricket club website better.

## 🚀 Quick Start for Contributors

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Set up the development environment** (see README.md)
4. **Create a feature branch** for your changes
5. **Make your changes** following our guidelines
6. **Test thoroughly** on different devices
7. **Submit a pull request** with clear description

## 📋 Before You Start

### Prerequisites
- Node.js (v18.17+)
- pnpm (v8.0+)
- Basic understanding of Next.js and React
- Familiarity with TypeScript (preferred)
- Understanding of cricket terminology (helpful)

### Development Setup
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/next-js-dashboard.git
cd next-js-dashboard

# Install dependencies
pnpm install

# Set up environment variables (see README.md)
cp .env.example .env.local

# Start development server
pnpm dev
```

## 🎯 Types of Contributions

### 🐛 Bug Fixes
- Fix responsive design issues
- Resolve authentication problems
- Correct data display errors
- Fix broken links or images

### ✨ New Features
- Add new cricket statistics
- Implement player performance tracking
- Create match result forms
- Add social media integrations

### 📚 Documentation
- Improve README.md
- Add code comments
- Create user guides
- Update API documentation

### 🎨 Design Improvements
- Enhance mobile responsiveness
- Improve accessibility
- Optimize performance
- Update UI components

## 📝 Coding Standards

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names

```typescript
// Good
interface PlayerProfile {
  id: string;
  name: string;
  role: CricketRole;
  experience: ExperienceLevel;
}

// Avoid
const data: any = {};
```

### React Components
- Use functional components with hooks
- Implement proper prop types
- Follow single responsibility principle
- Use descriptive component names

```tsx
// Good
interface TeamMemberCardProps {
  player: PlayerProfile;
  showContactInfo?: boolean;
}

export function TeamMemberCard({ player, showContactInfo = false }: TeamMemberCardProps) {
  // Component implementation
}
```

### Styling
- Use Tailwind CSS classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use semantic HTML elements

```tsx
// Good
<section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
      Team Roster
    </h2>
  </div>
</section>
```

### File Organization
- Keep components in `app/ui/` directory
- Use descriptive file names
- Group related functionality
- Follow Next.js App Router conventions

```
app/
├── ui/
│   ├── components/
│   │   ├── team-member-card.tsx
│   │   ├── fixture-card.tsx
│   │   └── sponsor-showcase.tsx
│   ├── forms/
│   └── layout/
```

## 🔄 Git Workflow

### Branch Naming
Use descriptive branch names with prefixes:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - UI/styling changes
- `refactor/` - Code refactoring

```bash
# Examples
git checkout -b feature/player-statistics
git checkout -b fix/mobile-navigation
git checkout -b docs/api-documentation
```

### Commit Messages
Follow conventional commit format:

```bash
# Format
type(scope): description

# Examples
feat(teams): add player performance statistics
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
style(header): improve mobile navigation design
```

### Commit Types
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code formatting, UI changes
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

## 🧪 Testing Guidelines

### Manual Testing
- Test on multiple screen sizes (mobile, tablet, desktop)
- Verify functionality in different browsers
- Check accessibility with screen readers
- Test authentication flows
- Validate form submissions

### Testing Checklist
- [ ] Mobile responsiveness (320px to 1920px)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari)
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Performance (page load times, image optimization)
- [ ] Authentication (login, logout, protected routes)
- [ ] Forms (validation, error handling, success states)

## 📱 Mobile-First Development

### Responsive Design Principles
1. **Start with mobile** (320px width)
2. **Progressive enhancement** for larger screens
3. **Touch-friendly** interactive elements (44px minimum)
4. **Readable typography** at all sizes
5. **Optimized images** for different densities

### Breakpoint Usage
```css
/* Mobile first approach */
.component {
  /* Mobile styles (default) */
  padding: 1rem;
  
  /* Tablet and up */
  @screen sm {
    padding: 1.5rem;
  }
  
  /* Desktop and up */
  @screen lg {
    padding: 2rem;
  }
}
```

## 🏏 Cricket-Specific Guidelines

### Terminology
Use correct cricket terminology:
- **Fixtures** (not "games" or "matches scheduled")
- **Overs** (not "innings" for T20 format)
- **Wickets** (not "outs")
- **All-rounder** (not "all-around player")

### Data Accuracy
- Verify cricket statistics and rules
- Use standard cricket formats (T20, ODI, Test)
- Follow ECB (England and Wales Cricket Board) guidelines
- Maintain consistency in player roles and positions

### User Experience
- Design for cricket enthusiasts and newcomers
- Provide context for cricket-specific terms
- Make statistics easy to understand
- Include helpful tooltips for complex concepts

## 🔍 Pull Request Process

### Before Submitting
1. **Sync with main branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-feature-branch
   git rebase main
   ```

2. **Test thoroughly**
   - Run `pnpm build` to check for build errors
   - Test on mobile and desktop
   - Verify all functionality works

3. **Update documentation**
   - Update README.md if needed
   - Add comments for complex code
   - Update CHANGELOG.md for significant changes

### PR Template
When creating a pull request, include:

```markdown
## Description
Brief description of changes made.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Refactoring

## Testing
- [ ] Tested on mobile devices
- [ ] Tested on desktop browsers
- [ ] Verified authentication flows
- [ ] Checked accessibility

## Screenshots
Include screenshots for UI changes.

## Related Issues
Closes #123
```

### Review Process
1. **Automated checks** must pass (build, lint)
2. **Code review** by maintainers
3. **Testing** on different devices
4. **Approval** and merge

## 🚫 What Not to Contribute

### Avoid These Changes
- Breaking changes without discussion
- Large refactoring without prior approval
- Changes that don't align with cricket club needs
- Code that doesn't follow our style guidelines
- Features that compromise security or performance

### Security Considerations
- Never commit sensitive data (API keys, passwords)
- Don't expose user personal information
- Follow authentication best practices
- Validate all user inputs

## 🎉 Recognition

### Contributors
All contributors will be:
- Listed in the README.md acknowledgments
- Credited in release notes for significant contributions
- Invited to join the GQ United CC community
- Recognized on the website (with permission)

### Becoming a Maintainer
Regular contributors may be invited to become maintainers with:
- Commit access to the repository
- Ability to review and merge PRs
- Input on project direction
- Recognition as a core team member

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Email**: info@gqunitedcc.com for direct contact

### Questions?
If you have questions about:
- **Technical implementation**: Create a GitHub issue
- **Cricket rules/terminology**: Ask in discussions
- **Design decisions**: Comment on relevant PRs
- **General inquiries**: Email the team

## 📚 Resources

### Learning Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cricket Rules and Terminology](https://www.ecb.co.uk/play/rules)

### Development Tools
- [React Developer Tools](https://react.dev/learn/react-developer-tools)
- [Next.js DevTools](https://nextjs.org/docs/app/building-your-application/optimizing/bundle-analyzer)
- [Tailwind CSS IntelliSense](https://tailwindcss.com/docs/editor-setup)
- [TypeScript for VS Code](https://code.visualstudio.com/docs/languages/typescript)

## 🙏 Thank You

Thank you for contributing to the GQ United Cricket Club website! Your efforts help build a better platform for our cricket community. Every contribution, no matter how small, makes a difference.

---

**Happy coding and cricket! 🏏**

*For more information, see our [README.md](README.md) or contact the team.* 