// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Yuanhang Liu';
export const SITE_DESCRIPTION =
	'My research mainly focuses on Multimodal Large Language Models and Embodied Intelligence. I am passionate about solving real-world problems through AI agents and distributed systems.';
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

/** 精选项目：数据在 consts 中维护；点击卡片或「源码」均跳转 GitHub（新标签页） */
export const FEATURED_PROJECTS = [
	{
		name: 'DeepSeek模型分布式部署指南',
		description:
			'本指南详细介绍了如何在华为云弹性云服务器(ECS)上进行DeepSeek大语言模型的分布式部署。',
		href: 'https://github.com/KKqdtjo/Distributed_Deployment',
		techTags: ['Python', 'Docker', 'Linux', 'Git'],
	},
	{
		name: '概念验证与孵化平台',
		description:
			'基于 B/S 架构的概念验证与孵化平台，用于管理科技项目的申报、评审、孵化全流程。',
		href: 'https://github.com/KKqdtjo/Concept_Platform',
		techTags: ['Java', 'JavaScript', 'Git', 'Linux'],
	},
	{
		name: 'Image_Caption',
		description: '从零搭建图像描述生成模型',
		href: 'https://github.com/KKqdtjo/Image_Caption/tree/master',
		techTags: ['Python', 'Git'],
	},
] as const;
