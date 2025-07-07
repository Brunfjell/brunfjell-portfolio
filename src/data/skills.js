import { FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiArduino, SiGodotengine } from 'react-icons/si'
import { createElement } from 'react'

export const skills = [
    { name: 'React', icon: createElement(FaReact) },
    { name: 'JavaScript', icon: createElement(SiJavascript) },
    { name: 'TypeScript', icon: createElement(SiTypescript) },
    { name: 'Node.js', icon: createElement(FaNodeJs) },
    { name: 'Python', icon: createElement(FaPython) },
    { name: 'Java', icon: createElement(FaJava) },
    { name: 'Arduino', icon: createElement(SiArduino) },
    { name: 'Godot', icon: createElement(SiGodotengine) },
]