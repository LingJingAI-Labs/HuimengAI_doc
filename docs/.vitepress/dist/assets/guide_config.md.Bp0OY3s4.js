import{_ as a,c as n,o as p,a1 as i}from"./chunks/framework.Dz2Wi2T-.js";const k=JSON.parse('{"title":"转绘配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config.md","filePath":"guide/config.md"}'),l={name:"guide/config.md"};function e(t,s,h,c,o,d){return p(),n("div",null,s[0]||(s[0]=[i(`<h1 id="转绘配置" tabindex="-1">转绘配置 <a class="header-anchor" href="#转绘配置" aria-label="Permalink to &quot;转绘配置&quot;">​</a></h1><p>转绘配置是灵境AI动漫创作平台的核心功能之一，它决定了AI如何将您的关键帧转换为艺术化的动画效果。本指南将详细介绍如何配置各种参数来获得最佳的转绘效果。</p><h2 id="配置概述" tabindex="-1">配置概述 <a class="header-anchor" href="#配置概述" aria-label="Permalink to &quot;配置概述&quot;">​</a></h2><h3 id="🎨-配置目标" tabindex="-1">🎨 配置目标 <a class="header-anchor" href="#🎨-配置目标" aria-label="Permalink to &quot;🎨 配置目标&quot;">​</a></h3><p>转绘配置的主要目标是：</p><ul><li>定义AI转绘的艺术风格</li><li>控制转绘的质量和细节</li><li>优化处理速度和资源使用</li><li>确保输出结果符合预期</li></ul><h3 id="📋-配置分类" tabindex="-1">📋 配置分类 <a class="header-anchor" href="#📋-配置分类" aria-label="Permalink to &quot;📋 配置分类&quot;">​</a></h3><p>转绘配置主要分为以下几个类别：</p><ul><li><strong>风格配置</strong>：艺术风格、色彩方案、画面风格</li><li><strong>质量配置</strong>：分辨率、细节程度、降噪设置</li><li><strong>性能配置</strong>：处理速度、资源分配、批处理设置</li><li><strong>高级配置</strong>：自定义参数、专业调优选项</li></ul><h2 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h2><h3 id="🎭-风格选择" tabindex="-1">🎭 风格选择 <a class="header-anchor" href="#🎭-风格选择" aria-label="Permalink to &quot;🎭 风格选择&quot;">​</a></h3><h4 id="预设风格" tabindex="-1">预设风格 <a class="header-anchor" href="#预设风格" aria-label="Permalink to &quot;预设风格&quot;">​</a></h4><p>灵境AI动漫创作平台提供多种预设艺术风格：</p><p><strong>动漫风格</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 鲜明的色彩对比</span></span>
<span class="line"><span>- 清晰的线条轮廓</span></span>
<span class="line"><span>- 卡通化的人物特征</span></span>
<span class="line"><span>- 适合人物动画</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 人物对话场景</span></span>
<span class="line"><span>- 日常生活记录</span></span>
<span class="line"><span>- 表情动作展示</span></span></code></pre></div><p><strong>写实风格</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 保持原始细节</span></span>
<span class="line"><span>- 自然的光影效果</span></span>
<span class="line"><span>- 真实的材质表现</span></span>
<span class="line"><span>- 适合风景场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 风景视频</span></span>
<span class="line"><span>- 纪录片素材</span></span>
<span class="line"><span>- 产品展示</span></span></code></pre></div><p><strong>水彩风格</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 柔和的色彩过渡</span></span>
<span class="line"><span>- 艺术化的笔触效果</span></span>
<span class="line"><span>- 梦幻的视觉感受</span></span>
<span class="line"><span>- 适合情感表达</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 情感类视频</span></span>
<span class="line"><span>- 艺术创作</span></span>
<span class="line"><span>- 回忆录制作</span></span></code></pre></div><p><strong>油画风格</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 厚重的色彩层次</span></span>
<span class="line"><span>- 明显的笔触纹理</span></span>
<span class="line"><span>- 古典的艺术感</span></span>
<span class="line"><span>- 适合肖像创作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 人物肖像</span></span>
<span class="line"><span>- 艺术摄影</span></span>
<span class="line"><span>- 经典场景重现</span></span></code></pre></div><h4 id="自定义风格" tabindex="-1">自定义风格 <a class="header-anchor" href="#自定义风格" aria-label="Permalink to &quot;自定义风格&quot;">​</a></h4><p><strong>风格强度调节</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>低强度 (20-40%)：</span></span>
<span class="line"><span>- 保持原始特征</span></span>
<span class="line"><span>- 轻微艺术化处理</span></span>
<span class="line"><span>- 适合商业用途</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中等强度 (50-70%)：</span></span>
<span class="line"><span>- 平衡真实与艺术</span></span>
<span class="line"><span>- 明显的风格特征</span></span>
<span class="line"><span>- 适合大多数场景</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高强度 (80-100%)：</span></span>
<span class="line"><span>- 强烈的艺术效果</span></span>
<span class="line"><span>- 显著的风格转换</span></span>
<span class="line"><span>- 适合创意表达</span></span></code></pre></div><p><strong>色彩配置</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>色彩饱和度：</span></span>
<span class="line"><span>- 低饱和度：柔和、复古</span></span>
<span class="line"><span>- 中饱和度：自然、平衡</span></span>
<span class="line"><span>- 高饱和度：鲜艳、活泼</span></span>
<span class="line"><span></span></span>
<span class="line"><span>色温调节：</span></span>
<span class="line"><span>- 冷色调：蓝色倾向，科技感</span></span>
<span class="line"><span>- 中性色调：自然色彩</span></span>
<span class="line"><span>- 暖色调：橙色倾向，温馨感</span></span>
<span class="line"><span></span></span>
<span class="line"><span>对比度：</span></span>
<span class="line"><span>- 低对比度：柔和、朦胧</span></span>
<span class="line"><span>- 中对比度：自然、清晰</span></span>
<span class="line"><span>- 高对比度：强烈、戏剧化</span></span></code></pre></div><h3 id="🔧-质量设置" tabindex="-1">🔧 质量设置 <a class="header-anchor" href="#🔧-质量设置" aria-label="Permalink to &quot;🔧 质量设置&quot;">​</a></h3><h4 id="分辨率配置" tabindex="-1">分辨率配置 <a class="header-anchor" href="#分辨率配置" aria-label="Permalink to &quot;分辨率配置&quot;">​</a></h4><p><strong>输出分辨率选项</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>标清 (480p)：</span></span>
<span class="line"><span>- 文件小，处理快</span></span>
<span class="line"><span>- 适合预览和测试</span></span>
<span class="line"><span>- 网络传输友好</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高清 (720p)：</span></span>
<span class="line"><span>- 平衡质量和大小</span></span>
<span class="line"><span>- 适合一般用途</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>全高清 (1080p)：</span></span>
<span class="line"><span>- 高质量输出</span></span>
<span class="line"><span>- 适合专业用途</span></span>
<span class="line"><span>- 处理时间较长</span></span>
<span class="line"><span></span></span>
<span class="line"><span>超高清 (4K)：</span></span>
<span class="line"><span>- 最高质量</span></span>
<span class="line"><span>- 适合专业制作</span></span>
<span class="line"><span>- 需要强大硬件支持</span></span></code></pre></div><p><strong>质量优化</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>细节保持：</span></span>
<span class="line"><span>- 低：快速处理，细节损失</span></span>
<span class="line"><span>- 中：平衡处理，适度细节</span></span>
<span class="line"><span>- 高：精细处理，最大细节</span></span>
<span class="line"><span></span></span>
<span class="line"><span>边缘锐化：</span></span>
<span class="line"><span>- 关闭：柔和效果</span></span>
<span class="line"><span>- 轻微：自然锐化</span></span>
<span class="line"><span>- 强烈：明显锐化</span></span>
<span class="line"><span></span></span>
<span class="line"><span>降噪设置：</span></span>
<span class="line"><span>- 关闭：保持原始噪点</span></span>
<span class="line"><span>- 轻微：减少明显噪点</span></span>
<span class="line"><span>- 强烈：最大程度降噪</span></span></code></pre></div><h4 id="帧率设置" tabindex="-1">帧率设置 <a class="header-anchor" href="#帧率设置" aria-label="Permalink to &quot;帧率设置&quot;">​</a></h4><p><strong>输出帧率选项</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>24fps：</span></span>
<span class="line"><span>- 电影标准帧率</span></span>
<span class="line"><span>- 适合艺术创作</span></span>
<span class="line"><span>- 文件大小适中</span></span>
<span class="line"><span></span></span>
<span class="line"><span>30fps：</span></span>
<span class="line"><span>- 标准视频帧率</span></span>
<span class="line"><span>- 适合一般用途</span></span>
<span class="line"><span>- 流畅的播放效果</span></span>
<span class="line"><span></span></span>
<span class="line"><span>60fps：</span></span>
<span class="line"><span>- 高帧率输出</span></span>
<span class="line"><span>- 超流畅效果</span></span>
<span class="line"><span>- 文件大小较大</span></span>
<span class="line"><span></span></span>
<span class="line"><span>原始帧率：</span></span>
<span class="line"><span>- 保持输入帧率</span></span>
<span class="line"><span>- 最佳兼容性</span></span>
<span class="line"><span>- 推荐设置</span></span></code></pre></div><h2 id="高级配置" tabindex="-1">高级配置 <a class="header-anchor" href="#高级配置" aria-label="Permalink to &quot;高级配置&quot;">​</a></h2><h3 id="⚙️-comfyui参数" tabindex="-1">⚙️ ComfyUI参数 <a class="header-anchor" href="#⚙️-comfyui参数" aria-label="Permalink to &quot;⚙️ ComfyUI参数&quot;">​</a></h3><h4 id="采样器设置" tabindex="-1">采样器设置 <a class="header-anchor" href="#采样器设置" aria-label="Permalink to &quot;采样器设置&quot;">​</a></h4><p><strong>采样器类型</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Euler：</span></span>
<span class="line"><span>- 快速采样</span></span>
<span class="line"><span>- 适合简单场景</span></span>
<span class="line"><span>- 处理速度快</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DPM++ 2M：</span></span>
<span class="line"><span>- 高质量采样</span></span>
<span class="line"><span>- 适合复杂场景</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DDIM：</span></span>
<span class="line"><span>- 稳定采样</span></span>
<span class="line"><span>- 适合批量处理</span></span>
<span class="line"><span>- 结果一致性好</span></span></code></pre></div><p><strong>采样步数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>低步数 (10-20)：</span></span>
<span class="line"><span>- 快速处理</span></span>
<span class="line"><span>- 适合预览</span></span>
<span class="line"><span>- 质量一般</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中等步数 (20-30)：</span></span>
<span class="line"><span>- 平衡质量和速度</span></span>
<span class="line"><span>- 适合大多数场景</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高步数 (30-50)：</span></span>
<span class="line"><span>- 最高质量</span></span>
<span class="line"><span>- 处理时间长</span></span>
<span class="line"><span>- 适合最终输出</span></span></code></pre></div><h4 id="引导参数" tabindex="-1">引导参数 <a class="header-anchor" href="#引导参数" aria-label="Permalink to &quot;引导参数&quot;">​</a></h4><p><strong>CFG Scale</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>低值 (3-7)：</span></span>
<span class="line"><span>- 更多创意自由</span></span>
<span class="line"><span>- 可能偏离原图</span></span>
<span class="line"><span>- 适合艺术创作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中等值 (7-12)：</span></span>
<span class="line"><span>- 平衡遵循和创意</span></span>
<span class="line"><span>- 适合大多数场景</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高值 (12-20)：</span></span>
<span class="line"><span>- 严格遵循提示</span></span>
<span class="line"><span>- 结果可预测</span></span>
<span class="line"><span>- 适合精确控制</span></span></code></pre></div><p><strong>Strength参数</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>低强度 (0.3-0.5)：</span></span>
<span class="line"><span>- 轻微修改</span></span>
<span class="line"><span>- 保持原始特征</span></span>
<span class="line"><span>- 适合微调</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中等强度 (0.5-0.7)：</span></span>
<span class="line"><span>- 明显转换</span></span>
<span class="line"><span>- 平衡原始和新风格</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高强度 (0.7-1.0)：</span></span>
<span class="line"><span>- 大幅改变</span></span>
<span class="line"><span>- 强烈风格转换</span></span>
<span class="line"><span>- 适合创意表达</span></span></code></pre></div><h3 id="🚀-性能优化" tabindex="-1">🚀 性能优化 <a class="header-anchor" href="#🚀-性能优化" aria-label="Permalink to &quot;🚀 性能优化&quot;">​</a></h3><h4 id="处理模式" tabindex="-1">处理模式 <a class="header-anchor" href="#处理模式" aria-label="Permalink to &quot;处理模式&quot;">​</a></h4><p><strong>单帧处理</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 逐帧独立处理</span></span>
<span class="line"><span>- 质量最高</span></span>
<span class="line"><span>- 处理时间长</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 高质量要求</span></span>
<span class="line"><span>- 复杂场景</span></span>
<span class="line"><span>- 最终输出</span></span></code></pre></div><p><strong>批量处理</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 多帧同时处理</span></span>
<span class="line"><span>- 速度较快</span></span>
<span class="line"><span>- 资源利用率高</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 大量关键帧</span></span>
<span class="line"><span>- 时间要求紧</span></span>
<span class="line"><span>- 预览测试</span></span></code></pre></div><p><strong>智能处理</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>特点：</span></span>
<span class="line"><span>- 自动选择最优模式</span></span>
<span class="line"><span>- 平衡质量和速度</span></span>
<span class="line"><span>- 适应性强</span></span>
<span class="line"><span></span></span>
<span class="line"><span>适用场景：</span></span>
<span class="line"><span>- 不确定最佳设置</span></span>
<span class="line"><span>- 混合场景类型</span></span>
<span class="line"><span>- 推荐选择</span></span></code></pre></div><h4 id="资源分配" tabindex="-1">资源分配 <a class="header-anchor" href="#资源分配" aria-label="Permalink to &quot;资源分配&quot;">​</a></h4><p><strong>GPU使用</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>低使用率 (30-50%)：</span></span>
<span class="line"><span>- 保留资源给其他任务</span></span>
<span class="line"><span>- 处理速度较慢</span></span>
<span class="line"><span>- 适合后台处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>中等使用率 (50-80%)：</span></span>
<span class="line"><span>- 平衡性能和稳定性</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span>- 适合大多数情况</span></span>
<span class="line"><span></span></span>
<span class="line"><span>高使用率 (80-100%)：</span></span>
<span class="line"><span>- 最大处理速度</span></span>
<span class="line"><span>- 可能影响系统稳定性</span></span>
<span class="line"><span>- 适合专用处理</span></span></code></pre></div><p><strong>内存管理</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>保守模式：</span></span>
<span class="line"><span>- 低内存占用</span></span>
<span class="line"><span>- 适合配置较低的设备</span></span>
<span class="line"><span>- 处理速度较慢</span></span>
<span class="line"><span></span></span>
<span class="line"><span>平衡模式：</span></span>
<span class="line"><span>- 适中内存占用</span></span>
<span class="line"><span>- 推荐设置</span></span>
<span class="line"><span>- 适合大多数设备</span></span>
<span class="line"><span></span></span>
<span class="line"><span>激进模式：</span></span>
<span class="line"><span>- 高内存占用</span></span>
<span class="line"><span>- 最快处理速度</span></span>
<span class="line"><span>- 需要充足内存</span></span></code></pre></div><h2 id="配置模板" tabindex="-1">配置模板 <a class="header-anchor" href="#配置模板" aria-label="Permalink to &quot;配置模板&quot;">​</a></h2><h3 id="📝-预设模板" tabindex="-1">📝 预设模板 <a class="header-anchor" href="#📝-预设模板" aria-label="Permalink to &quot;📝 预设模板&quot;">​</a></h3><h4 id="快速预览模板" tabindex="-1">快速预览模板 <a class="header-anchor" href="#快速预览模板" aria-label="Permalink to &quot;快速预览模板&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">快速预览</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">快速查看效果</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">配置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  分辨率</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">480p</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  质量</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">低</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  采样步数</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  处理模式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">批量</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  预计时间</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1-3分钟</span></span></code></pre></div><h4 id="标准输出模板" tabindex="-1">标准输出模板 <a class="header-anchor" href="#标准输出模板" aria-label="Permalink to &quot;标准输出模板&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">标准输出</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">一般用途输出</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">配置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  分辨率</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1080p</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  质量</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">中</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  采样步数</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  处理模式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">智能</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  预计时间</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5-15分钟</span></span></code></pre></div><h4 id="高质量模板" tabindex="-1">高质量模板 <a class="header-anchor" href="#高质量模板" aria-label="Permalink to &quot;高质量模板&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">高质量输出</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">专业级输出</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">配置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  分辨率</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1080p/4K</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  质量</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">高</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  采样步数</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">35</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  处理模式</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">单帧</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  预计时间</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">15-60分钟</span></span></code></pre></div><h4 id="动漫风格模板" tabindex="-1">动漫风格模板 <a class="header-anchor" href="#动漫风格模板" aria-label="Permalink to &quot;动漫风格模板&quot;">​</a></h4><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">名称</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">动漫风格</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">用途</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">动漫化转换</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">配置</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  风格</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">动漫</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  风格强度</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">70%</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  色彩饱和度</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">高</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  边缘锐化</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">强烈</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  CFG Scale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span></span></code></pre></div><h3 id="💾-自定义模板" tabindex="-1">💾 自定义模板 <a class="header-anchor" href="#💾-自定义模板" aria-label="Permalink to &quot;💾 自定义模板&quot;">​</a></h3><h4 id="创建模板" tabindex="-1">创建模板 <a class="header-anchor" href="#创建模板" aria-label="Permalink to &quot;创建模板&quot;">​</a></h4><ol><li><p><strong>配置参数</strong></p><ul><li>根据需求调整各项参数</li><li>测试效果确认满意</li><li>记录最佳参数组合</li></ul></li><li><p><strong>保存模板</strong></p><ul><li>点击「保存为模板」</li><li>输入模板名称和描述</li><li>选择模板分类</li><li>确认保存</li></ul></li><li><p><strong>模板管理</strong></p><ul><li>查看已保存的模板</li><li>编辑模板参数</li><li>删除不需要的模板</li><li>导出/导入模板</li></ul></li></ol><h4 id="模板应用" tabindex="-1">模板应用 <a class="header-anchor" href="#模板应用" aria-label="Permalink to &quot;模板应用&quot;">​</a></h4><p><strong>快速应用</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>选择模板 → 一键应用 → 开始处理</span></span></code></pre></div><p><strong>参数微调</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>选择模板 → 微调参数 → 保存修改 → 开始处理</span></span></code></pre></div><p><strong>批量应用</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>选择多个任务 → 应用模板 → 批量处理</span></span></code></pre></div><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="🎯-配置策略" tabindex="-1">🎯 配置策略 <a class="header-anchor" href="#🎯-配置策略" aria-label="Permalink to &quot;🎯 配置策略&quot;">​</a></h3><h4 id="根据内容类型选择" tabindex="-1">根据内容类型选择 <a class="header-anchor" href="#根据内容类型选择" aria-label="Permalink to &quot;根据内容类型选择&quot;">​</a></h4><p><strong>人物视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐配置：</span></span>
<span class="line"><span>- 风格：动漫或写实</span></span>
<span class="line"><span>- 细节保持：高</span></span>
<span class="line"><span>- 边缘锐化：中等</span></span>
<span class="line"><span>- CFG Scale：8-12</span></span>
<span class="line"><span>- Strength：0.5-0.7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意事项：</span></span>
<span class="line"><span>- 关注面部细节</span></span>
<span class="line"><span>- 保持人物特征</span></span>
<span class="line"><span>- 避免过度变形</span></span></code></pre></div><p><strong>风景视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐配置：</span></span>
<span class="line"><span>- 风格：写实或水彩</span></span>
<span class="line"><span>- 细节保持：中等</span></span>
<span class="line"><span>- 色彩饱和度：中高</span></span>
<span class="line"><span>- CFG Scale：7-10</span></span>
<span class="line"><span>- Strength：0.4-0.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意事项：</span></span>
<span class="line"><span>- 保持自然色彩</span></span>
<span class="line"><span>- 增强天空效果</span></span>
<span class="line"><span>- 注意光影处理</span></span></code></pre></div><p><strong>动作视频</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>推荐配置：</span></span>
<span class="line"><span>- 风格：动漫或写实</span></span>
<span class="line"><span>- 帧率：30fps或更高</span></span>
<span class="line"><span>- 降噪：强烈</span></span>
<span class="line"><span>- 处理模式：单帧</span></span>
<span class="line"><span>- Strength：0.3-0.5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>注意事项：</span></span>
<span class="line"><span>- 保持动作连贯性</span></span>
<span class="line"><span>- 减少运动模糊</span></span>
<span class="line"><span>- 确保关键帧质量</span></span></code></pre></div><h4 id="质量与速度平衡" tabindex="-1">质量与速度平衡 <a class="header-anchor" href="#质量与速度平衡" aria-label="Permalink to &quot;质量与速度平衡&quot;">​</a></h4><p><strong>优先质量</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：</span></span>
<span class="line"><span>- 最终输出</span></span>
<span class="line"><span>- 专业用途</span></span>
<span class="line"><span>- 重要项目</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>- 高分辨率</span></span>
<span class="line"><span>- 高采样步数</span></span>
<span class="line"><span>- 单帧处理</span></span>
<span class="line"><span>- 最大细节保持</span></span></code></pre></div><p><strong>优先速度</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：</span></span>
<span class="line"><span>- 快速预览</span></span>
<span class="line"><span>- 测试效果</span></span>
<span class="line"><span>- 大批量处理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>- 中低分辨率</span></span>
<span class="line"><span>- 低采样步数</span></span>
<span class="line"><span>- 批量处理</span></span>
<span class="line"><span>- 适度质量设置</span></span></code></pre></div><p><strong>平衡模式</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>场景：</span></span>
<span class="line"><span>- 日常使用</span></span>
<span class="line"><span>- 一般项目</span></span>
<span class="line"><span>- 不确定需求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置：</span></span>
<span class="line"><span>- 1080p分辨率</span></span>
<span class="line"><span>- 25步采样</span></span>
<span class="line"><span>- 智能处理</span></span>
<span class="line"><span>- 中等质量设置</span></span></code></pre></div><h3 id="⚡-效率提升" tabindex="-1">⚡ 效率提升 <a class="header-anchor" href="#⚡-效率提升" aria-label="Permalink to &quot;⚡ 效率提升&quot;">​</a></h3><h4 id="配置优化技巧" tabindex="-1">配置优化技巧 <a class="header-anchor" href="#配置优化技巧" aria-label="Permalink to &quot;配置优化技巧&quot;">​</a></h4><p><strong>参数测试流程</strong></p><ol><li>使用快速预览模板测试</li><li>选择1-2个关键帧验证效果</li><li>调整关键参数</li><li>确认效果后应用到全部</li></ol><p><strong>批量处理策略</strong></p><ol><li>将相似内容分组</li><li>为每组创建专用模板</li><li>批量应用相同配置</li><li>统一后处理和输出</li></ol><p><strong>资源管理</strong></p><ol><li>合理安排处理时间</li><li>避免高峰期处理</li><li>监控系统资源使用</li><li>及时清理临时文件</li></ol><h2 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to &quot;故障排除&quot;">​</a></h2><h3 id="❗-常见问题" tabindex="-1">❗ 常见问题 <a class="header-anchor" href="#❗-常见问题" aria-label="Permalink to &quot;❗ 常见问题&quot;">​</a></h3><h4 id="输出质量问题" tabindex="-1">输出质量问题 <a class="header-anchor" href="#输出质量问题" aria-label="Permalink to &quot;输出质量问题&quot;">​</a></h4><p><strong>问题：输出图像模糊</strong></p><p>可能原因：</p><ul><li>分辨率设置过低</li><li>降噪设置过强</li><li>采样步数不足</li><li>原始视频质量差</li></ul><p>解决方案：</p><ol><li>提高输出分辨率</li><li>减少降噪强度</li><li>增加采样步数</li><li>检查原始视频质量</li></ol><p><strong>问题：颜色失真</strong></p><p>可能原因：</p><ul><li>色彩配置不当</li><li>风格强度过高</li><li>CFG Scale设置错误</li><li>模型不适合内容类型</li></ul><p>解决方案：</p><ol><li>调整色彩饱和度和色温</li><li>降低风格强度</li><li>调整CFG Scale到7-12</li><li>尝试其他风格模型</li></ol><h4 id="处理速度问题" tabindex="-1">处理速度问题 <a class="header-anchor" href="#处理速度问题" aria-label="Permalink to &quot;处理速度问题&quot;">​</a></h4><p><strong>问题：处理速度过慢</strong></p><p>可能原因：</p><ul><li>配置要求过高</li><li>系统资源不足</li><li>网络连接问题</li><li>服务器负载过高</li></ul><p>解决方案：</p><ol><li>降低质量设置</li><li>减少采样步数</li><li>使用批量处理模式</li><li>选择非高峰时段处理</li></ol><p><strong>问题：处理失败</strong></p><p>可能原因：</p><ul><li>参数配置错误</li><li>内存不足</li><li>网络中断</li><li>文件损坏</li></ul><p>解决方案：</p><ol><li>检查配置参数</li><li>降低内存使用</li><li>检查网络连接</li><li>重新上传文件</li></ol><h3 id="🔧-技术支持" tabindex="-1">🔧 技术支持 <a class="header-anchor" href="#🔧-技术支持" aria-label="Permalink to &quot;🔧 技术支持&quot;">​</a></h3><p>如果遇到配置相关问题，请提供以下信息：</p><ul><li>使用的配置参数</li><li>输入视频信息</li><li>错误信息截图</li><li>系统环境信息</li></ul><p>联系方式：</p><ul><li><strong>技术支持邮箱</strong>：tech@huimeng-ai.com</li><li><strong>在线客服</strong>：工作时间内即时响应</li><li><strong>用户社区</strong>：分享经验和技巧</li></ul><hr><p>掌握了转绘配置后，您可以继续学习：</p><p><a href="/guide/tasks.html">任务管理 →</a> <a href="/guide/faq.html">常见问题 →</a> <a href="/api/">API文档 →</a></p>`,136)]))}const g=a(l,[["render",e]]);export{k as __pageData,g as default};
