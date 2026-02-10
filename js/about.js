const teamMembers = [
    {
        id: 1,
        name: "Тулешев Мирас",
        position: "Основатель",
        description: "Основатель проекта. Отвечает за стратегию и развитие.",
        image: "https://rsv.ru/blog/wp-content/uploads/2021/07/veb-razrabotchik-918x516.jpg",
        social: {
            github: "https://github.com/Myltrix",
        }
    },
    {
        id: 2,
        name: "Досан Азамат",
        position: "Технический директор",
        description: "Отвечает за техническую часть и развитие продукта.",
        image: "https://www.it-courses.by/wp-content/uploads/2018/06/20-Most-Common-Work-from-Home-Job-Titles.jpg",
        social: {
            github: "https://github.com/azamatdosan",
        }
    }
];

let localCart = [];
try {
    localCart = JSON.parse(localStorage.getItem('booklyCart')) || [];
} catch (e) {
    console.error("Ошибка чтения корзины", e);
}

function displayTeam() {
    const teamGrid = document.getElementById('teamGrid');
    
    if (!teamGrid) {
        console.error("Элемент #teamGrid не найден!");
        return;
    }

    teamGrid.innerHTML = '';
    
    teamMembers.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        
        let socialIcons = '';
        if (member.social.linkedin) {
            socialIcons += `<a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>`;
        }
        if (member.social.twitter) {
            socialIcons += `<a href="${member.social.twitter}" target="_blank"><i class="fab fa-twitter"></i></a>`;
        }
        if (member.social.github) {
            socialIcons += `<a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>`;
        }
        if (member.social.instagram) {
            socialIcons += `<a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>`;
        }
        if (member.social.email) {
            socialIcons += `<a href="mailto:${member.social.email}"><i class="fas fa-envelope"></i></a>`;
        }
        
        teamCard.innerHTML = `
            <div class="team-image">
                <img src="${member.image}" alt="${member.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="team-content">
                <h3 class="team-name">${member.name}</h3>
                <p class="team-position">${member.position}</p>
                <p class="team-description">${member.description}</p>
                <div class="team-social">
                    ${socialIcons}
                </div>
            </div>
        `;
        
        teamGrid.appendChild(teamCard);
    });
}

function demonstrateProjectRequirements() {
    console.log('=== ДЕМОНСТРАЦИЯ ТРЕБОВАНИЙ ПРОЕКТА (О магазине) ===');
    
    const teamSize = teamMembers.length;
    
    if (teamSize > 5) {
        console.log(`У нас большая команда: ${teamSize} специалистов`);
    } else if (teamSize > 3) {
        console.log(`У нас средняя команда: ${teamSize} специалиста`);
    } else {
        console.log(`У нас небольшая команда: ${teamSize} специалиста`);
    }
    
    console.log('2. ЦИКЛ (for) - вывод команды:');
    for (let i = 0; i < teamMembers.length; i++) {
        console.log(`${i + 1}. ${teamMembers[i].name} - ${teamMembers[i].position}`);
    }
    
    let totalExperience = 0;
    let j = 0;
    while (j < teamMembers.length) {
        totalExperience += 5 + j;
        j++;
    }
    console.log(`3. Общий опыт команды (while): ${totalExperience} лет`);

    const positions = {};
    
    teamMembers.forEach(member => {
        switch(member.position) {
            case "Основатель":
                positions.ceo = (positions.ceo || 0) + 1;
                break;
            case "Технический директор":
                positions.tech = (positions.tech || 0) + 1;
                break;
            default:
                positions.other = (positions.other || 0) + 1;
        }
    });
    
    console.log('4. SWITCH - Распределение должностей:', positions);
}

function calculateTeamExperience() {
    let experience = 0;
    teamMembers.forEach(member => {
        if (member.position.includes('Основатель')) {
            experience += 10;
        } else if (member.position.includes('директор')) {
            experience += 8;
        } else {
            experience += 5;
        }
    });
    return experience;
}

function getTeamPositions() {
    const positions = [];
    teamMembers.forEach(member => {
        if (!positions.includes(member.position)) {
            positions.push(member.position);
        }
    });
    return positions;
}

function findTeamMemberByName(name) {
    for (let i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].name.toLowerCase().includes(name.toLowerCase())) {
            return teamMembers[i];
        }
    }
    return null;
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        const totalItems = localCart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    displayTeam();
    
    demonstrateProjectRequirements();
    
    console.log('\n=== ПОЛЬЗОВАТЕЛЬСКИЕ ФУНКЦИИ ===');
    console.log('Общий опыт команды:', calculateTeamExperience(), 'лет');
    console.log('Уникальные должности:', getTeamPositions());
    
    const foundMember = findTeamMemberByName('Мирас');
    if (foundMember) {
        console.log('Найден сотрудник:', foundMember.name, '-', foundMember.position);
    }
    
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        /* Анимация для карточек команды */
        .team-card {
            animation: fadeInUp 0.6s ease forwards;
            opacity: 0; /* Скрываем изначально для анимации */
        }
        
        .team-card:nth-child(1) { animation-delay: 0.1s; }
        .team-card:nth-child(2) { animation-delay: 0.2s; }
        .team-card:nth-child(3) { animation-delay: 0.3s; }
        .team-card:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Стили для изображений команды */
        .team-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `;
    document.head.appendChild(style);
});