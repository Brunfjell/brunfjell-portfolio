import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiArduino } from 'react-icons/si'
import { createElement } from 'react'

export const skills = [
    { name: 'React', icon: createElement(FaReact), level: 87 },
    { name: 'JavaScript', icon: createElement(SiJavascript), level: 85 },
    { name: 'TypeScript', icon: createElement(SiTypescript), level: 74 },
    { name: 'Node.js', icon: createElement(FaNodeJs), level: 75 },
    { name: 'Python', icon: createElement(FaPython), level: 70 },
    { name: 'Arduino', icon: createElement(SiArduino), level: 85 },
]