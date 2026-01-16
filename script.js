// Main JavaScript File

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on
    if (document.getElementById('toolsGrid')) {
        loadTools();
        setupSearch();
    }
    
    if (document.getElementById('toolDetailContent')) {
        loadToolDetail();
    }
    
    // Add scroll animations
    setupScrollAnimations();
});

// Load Tools on tools.html
function loadTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;
    
    toolsGrid.innerHTML = '';
    
    aiTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Create Tool Card
function createToolCard(tool) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    col.innerHTML = `
        <div class="tool-card" onclick="goToToolDetail(${tool.id})">
            <div class="tool-card-image">
                <img src="${tool.image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'}" alt="${tool.name}" onerror="this.src='https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'">
                <div class="tool-card-overlay">
                    <i class="bi ${tool.icon}"></i>
                </div>
            </div>
            <div class="tool-card-body">
                <span class="tool-badge" style="background: ${tool.color || 'var(--gradient)'}">${tool.category}</span>
                <h4>${tool.name}</h4>
                <p>${tool.description}</p>
                <div class="mt-auto">
                    <button class="btn btn-primary w-100" style="background: ${tool.color || 'var(--gradient)'}">عرض التفاصيل</button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// Setup Search Functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const toolsGrid = document.getElementById('toolsGrid');
        if (!toolsGrid) return;
        
        const filteredTools = aiTools.filter(tool => 
            tool.name.toLowerCase().includes(searchTerm) ||
            tool.description.toLowerCase().includes(searchTerm) ||
            tool.category.toLowerCase().includes(searchTerm)
        );
        
        toolsGrid.innerHTML = '';
        
        if (filteredTools.length === 0) {
            toolsGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search display-1 text-muted"></i>
                    <h3 class="mt-3 text-muted">لم يتم العثور على نتائج</h3>
                    <p class="text-muted">جرب البحث بكلمات مختلفة</p>
                </div>
            `;
        } else {
            filteredTools.forEach(tool => {
                const toolCard = createToolCard(tool);
                toolsGrid.appendChild(toolCard);
            });
        }
    });
}

// Go to Tool Detail Page
function goToToolDetail(toolId) {
    localStorage.setItem('selectedToolId', toolId);
    window.location.href = 'tool-detail.html';
}

// Load Tool Detail
function loadToolDetail() {
    const toolDetailContent = document.getElementById('toolDetailContent');
    if (!toolDetailContent) return;
    
    const toolId = parseInt(localStorage.getItem('selectedToolId'));
    const tool = aiTools.find(t => t.id === toolId);
    
    if (!tool) {
        toolDetailContent.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-triangle display-1 text-muted"></i>
                <h3 class="mt-3 text-muted">الأداة غير موجودة</h3>
                <a href="tools.html" class="btn btn-primary mt-3">العودة للأدوات</a>
            </div>
        `;
        return;
    }
    
    toolDetailContent.innerHTML = `
        <div class="col-lg-8 mx-auto">
            <div class="tool-detail-header" style="background: ${tool.color || 'var(--gradient)'}">
                <div class="tool-detail-image">
                    <img src="${tool.image || 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'}" alt="${tool.name}" onerror="this.src='https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'">
                </div>
                <i class="bi ${tool.icon}"></i>
                <h1 class="display-4 fw-bold mb-3">${tool.name}</h1>
                <span class="badge bg-light text-dark fs-6">${tool.category}</span>
            </div>
            
            <div class="tool-detail-content">
                <h3><i class="bi bi-info-circle"></i> نظرة عامة</h3>
                <p class="lead">${tool.description}</p>
                
                <h3 class="mt-4"><i class="bi bi-star-fill"></i> المميزات الرئيسية</h3>
                <ul>
                    ${tool.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                
                <div class="text-center mt-4">
                    <a href="${tool.link}" target="_blank" class="tool-link-btn">
                        <i class="bi bi-box-arrow-up-right"></i> زيارة الموقع الرسمي
                    </a>
                </div>
            </div>
            
            <div class="text-center mt-4">
                <a href="tools.html" class="btn btn-outline-primary">
                    <i class="bi bi-arrow-right"></i> العودة لقائمة الأدوات
                </a>
            </div>
        </div>
    `;
    
    // Update page title
    document.title = `${tool.name} - تفاصيل الأداة`;
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe cards and timeline items
    document.querySelectorAll('.card, .timeline-item, .feature-box').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

