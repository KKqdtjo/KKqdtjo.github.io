// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Yuanhang Liu';
export const SITE_DESCRIPTION =
	'My research mainly focuses on Multimodal Large Language Models and Embodied Intelligence. I am dedicated to exploring the capability boundaries of multimodal large models and the applications of embodied intelligence in complex real-world physical tasks.';
export const SITE_AUTHOR = 'Yuanhang Liu';
export const SITE_AUTHOR_ZH = '刘远航';

export const PROFILE_TAGLINE = 'Undergraduate CS Student @ Renmin University of China (RUC)';
export const PROFILE_STATUS_TAG =
	'Actively Seeking internships & collaborations in LLMs, Multimodal, and Embodied AI.';
export const PROFILE_IMAGE_URL = '/avatar.jpg';

export const GITHUB_URL = 'https://github.com/KKqdtjo';
export const EMAIL = '2023202275@ruc.edu.cn';

/** 技术栈：按类别展示，仅标签/列表，不含熟练度 */
export const SKILL_CATEGORIES = [
	{
		label: '编程语言',
		items: ['Python', 'Java', 'C++', 'JavaScript'],
	},
	{
		label: '框架与工具',
		items: ['Docker', 'Git', 'Linux'],
	},
] as const;

/** 精选项目：横向宽卡片，支持 image / techTags / links（code/paper/demo/slides 均可选） */
export const FEATURED_PROJECTS = [
	{
		name: 'MyEasyMimic',
		image: '/images/easymimic.png',
		description:
			'Reproduced the EasyMimic algorithm using the latest LeRobot framework with a 7-DOF SO-100 robot arm. Collected custom demonstration data and performed local fine-tuning and inference on the GR00T foundation model.',
		techTags: ['Python', 'LeRobot', 'GR00T', 'Robot Learning'],
		links: {
			code: 'https://github.com/KKqdtjo/MyEasyMimic',
		},
	},
	{
		name: 'Robot Arm Teleoperation System',
		image: '/images/teleop.png',
		description:
			'A monocular-camera-based teleoperation system that captures human hand gestures and maps them in real time to a xArm7 robot arm and Allegro Hand dexterous gripper inside the SAPIEN simulation environment.',
		techTags: ['Python', 'SAPIEN', 'Computer Vision', 'Robotics'],
		links: {
			code: 'https://github.com/GreyLee-Hacker/Robot_Arm_Teleop_System',
		},
	},
	{
		name: 'RefereeBench',
		image: '/images/pipeline.png',
		description:
			'A multi-modal benchmark for evaluating MLLMs on professional sports refereeing decisions. Combines video understanding with RAG over official rulebooks across 11 sports, using a hierarchical QA framework (Q1–Q5) from binary foul detection to rule-based penalty justification.',
		techTags: ['Python', 'Multimodal LLM', 'RAG', 'Benchmark'],
		links: {
			code: 'https://github.com/KKqdtjo/SportReferee_Code',
		},
	},
	{
		name: 'Concept Verification & Incubation Platform',
		image: '/images/platform.png',
		description:
			'A B/S-architecture platform for managing the full lifecycle of tech-project incubation — from application and peer review to incubation tracking. Built with a modern full-stack architecture for high performance, scalability, and security.',
		techTags: ['Java', 'JavaScript', 'Spring Boot', 'Full-Stack'],
		links: {
			code: 'https://github.com/KKqdtjo/Concept_Platform',
		},
	},
] as const;
