const personalData = {
    name: "Trần Thanh Sơn",
    bio: "Chào mừng đến với không gian cá nhân của tôi! Tôi là một nhà phát triển Full-Stack chuyên về JavaScript. Tôi tin vào việc xây dựng các sản phẩm số chất lượng cao, có khả năng mở rộng và mang lại trải nghiệm người dùng tuyệt vời. Hãy khám phá các dự án của tôi bên dưới!",
    
    // ĐƯỜNG DẪN ĐÃ ĐƯỢC CẬP NHẬT: Trỏ đến file ảnh trong thư mục 'images'
    profilePicUrl: "images/profile.jpg", 
    
    socials: {
        github: "https://github.com/thanh-son-dev", // Thay thế
        linkedin: "https://linkedin.com/in/thanh-son-dev", // Thay thế
        email: "son.thanh.dev@email.com" // Thay thế
    },
    skills: [
        { name: "ReactJS", level: "Senior", description: "Xây dựng giao diện người dùng hiện đại và hiệu suất cao." },
        { name: "Tailwind CSS", level: "Expert", description: "Tạo kiểu dáng responsive nhanh chóng và đẹp mắt." },
        { name: "Node.js", level: "Mid-level", description: "Phát triển API và Backend logic." },
        { name: "PostgreSQL", level: "Mid-level", description: "Quản lý và tối ưu hóa cơ sở dữ liệu quan hệ." },
        { name: "TypeScript", level: "Mid-level", description: "Gia tăng độ an toàn và dễ bảo trì cho mã nguồn." },
        { name: "Git & GitHub", level: "Expert", description: "Quản lý phiên bản và quy trình làm việc nhóm." }
    ],
    projects: [
        { title: "Ứng dụng Chat thời gian thực", description: "Xây dựng với MERN Stack và Socket.io. Hỗ trợ tin nhắn, nhóm chat và thông báo.", tags: ["React", "Node.js", "Socket.io"], url: "https://github.com/thanh-son-dev/chat-app" },
        { title: "Portfolio 3D (Three.js)", description: "Trang web giới thiệu bản thân với đồ họa 3D tương tác.", tags: ["Three.js", "JavaScript", "HTML"], url: "https://github.com/thanh-son-dev/3d-portfolio" },
        { title: "Hệ thống quản lý công việc", description: "Công cụ quản lý dự án cá nhân và nhóm nhỏ.", tags: ["Vue.js", "Express", "PostgreSQL"], url: "https://github.com/thanh-son-dev/task-manager" },
    ]
};

function renderData() {
    // Cập nhật thông tin Profile
    document.getElementById('name').textContent = personalData.name;
    document.getElementById('bio').textContent = personalData.bio;
    document.getElementById('profile-picture').src = personalData.profilePicUrl;
    document.getElementById('github-link').href = personalData.socials.github;
    document.getElementById('linkedin-link').href = personalData.socials.linkedin;
    document.getElementById('email-link').href = `mailto:${personalData.socials.email}`;
    document.getElementById('contact-button').href = `mailto:${personalData.socials.email}`;

    // Cập nhật Kỹ Năng
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = personalData.skills.map(skill => `
        <div class="content-card bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md">
            <div class="flex items-center space-x-3 mb-2">
                <span class="text-xl font-bold text-indigo-400">${skill.name}</span>
                <span class="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500 text-white">${skill.level}</span>
            </div>
            <p class="text-sm text-gray-400">${skill.description}</p>
        </div>
    `).join('');

    // Cập nhật Dự Án
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = personalData.projects.map(project => `
        <div class="content-card bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-md flex flex-col justify-between">
            <div>
                <a href="${project.url}" target="_blank" class="text-xl font-bold text-white hover:text-indigo-400 transition duration-150">${project.title}</a>
                <p class="text-sm text-gray-400 mt-2 mb-4">${project.description}</p>
            </div>
            <div class="flex flex-wrap gap-2 mt-4">
                ${project.tags.map(tag => `<span class="text-xs font-semibold px-3 py-1 rounded-full bg-gray-700 text-indigo-300">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Chạy hàm render khi trang tải xong
document.addEventListener('DOMContentLoaded', renderData);
