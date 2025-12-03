const managementData = {
    departments: [
        { 
            id: 1, 
            name: 'تطوير تطبيقات سطح المكتب', 
            manager: 'أحمد محمد',
            employees: 12,
            activeProjects: 8,
            status: 'نشط',
            services: ['C#', 'Java', 'Python', 'POS'],
            progress: 85
        },
        { 
            id: 2, 
            name: 'تطوير أنظمة الويب', 
            manager: 'سارة علي',
            employees: 15,
            activeProjects: 12,
            status: 'نشط',
            services: ['المحاسبة', 'السحابة', 'الحكومية', 'الإدارة'],
            progress: 92
        },
        { 
            id: 3, 
            name: 'تصميم مواقع الويب', 
            manager: 'خالد إبراهيم',
            employees: 8,
            activeProjects: 15,
            status: 'نشط',
            services: ['شركات', 'تجارة', 'SEO', 'متجاوب'],
            progress: 78
        },
        { 
            id: 4, 
            name: 'تطبيقات الهواتف المحمولة', 
            manager: 'فاطمة حسن',
            employees: 14,
            activeProjects: 10,
            status: 'نشط',
            services: ['iOS', 'Android', 'React Native', 'Flutter'],
            progress: 88
        },
        { 
            id: 5, 
            name: 'الصيانة والدعم الفني', 
            manager: 'محمد عبدالله',
            employees: 10,
            activeProjects: 25,
            status: 'نشط',
            services: ['الدعم', 'الميدانية', 'عن بعد', 'الشبكات'],
            progress: 95
        },
        { 
            id: 6, 
            name: 'الاستضافة والخوادم', 
            manager: 'يوسف أحمد',
            employees: 7,
            activeProjects: 18,
            status: 'نشط',
            services: ['الخوادم', 'الاستضافة', 'النسخ', 'الأمان'],
            progress: 90
        },
        { 
            id: 7, 
            name: 'الاستشارات التقنية', 
            manager: 'ليان سعيد',
            employees: 6,
            activeProjects: 12,
            status: 'نشط',
            services: ['التحليل', 'التصميم', 'التكامل', 'التدريب'],
            progress: 82
        },
        { 
            id: 8, 
            name: 'المحاسبة والمالية', 
            manager: 'عمر خالد',
            employees: 5,
            activeProjects: 6,
            status: 'نشط',
            services: ['المحاسبة', 'المالية', 'المرتبات', 'الميزانية'],
            progress: 96
        },
        { 
            id: 9, 
            name: 'الشركاء والداعمين', 
            manager: 'نورة عبدالرحمن',
            employees: 4,
            activeProjects: 8,
            status: 'نشط',
            services: ['الشركاء', 'الداعمين', 'الموردين', 'العملاء'],
            progress: 75
        }
    ],
    
    notifications: [
        { id: 1, title: 'اجتماع الإدارة الأسبوعي', description: 'اجتماع الإدارة الأسبوعي يوم الاثنين الساعة 10 صباحاً', time: 'قبل 2 ساعة', unread: true, priority: 'high' },
        { id: 2, title: 'تقرير الأداء الشهري', description: 'يرجى مراجعة تقرير الأداء الشهري للشركة', time: 'قبل 5 ساعات', unread: true, priority: 'medium' },
        { id: 3, title: 'ميزانية الربع الأول', description: 'تم اعتماد ميزانية الربع الأول للشركة', time: 'أمس', unread: false, priority: 'high' },
        { id: 4, title: 'اجتماع مدراء الأقسام', description: 'اجتماع مدراء الأقسام يوم الأربعاء القادم', time: 'الاثنين', unread: false, priority: 'medium' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'المدير العام', message: 'مرحباً بالجميع، نرجو متابعة تقارير الأداء الشهرية', time: '10:00', type: 'received' },
            { sender: 'مساعد المدير', message: 'تم إرسال التقارير للجميع عبر البريد الإلكتروني', time: '10:15', type: 'received' }
        ],
        managers: [
            { sender: 'مدير تطوير الويب', message: 'اجتماع المدراء سيكون يوم الأربعاء القادم', time: '09:30', type: 'received' },
            { sender: 'مدير التصميم', message: 'هل هناك أي تحديثات بخصوص الميزانية الجديدة؟', time: '09:45', type: 'received' }
        ],
        desktop: [
            { sender: 'مدير القسم', message: 'تقرير سير العمل على مشاريع C# جاهز للمراجعة', time: '11:00', type: 'received' },
            { sender: 'مطور Java', message: 'تم الانتهاء من المرحلة الأولى من المشروع الحكومي', time: '11:30', type: 'received' }
        ],
        web: [
            { sender: 'مدير القسم', message: 'يجب تسليم المشروع المحاسبي بنهاية هذا الأسبوع', time: '10:30', type: 'received' },
            { sender: 'مطور Laravel', message: 'نواجه بعض المشاكل في تكامل واجهة البرمجة', time: '10:45', type: 'received' }
        ],
        design: [
            { sender: 'مدير القسم', message: 'تصاميم مواقع الشركات تحتاج للمراجعة النهائية', time: '09:15', type: 'received' },
            { sender: 'مصمم ويب', message: 'أنتهيت من تصميم 3 مواقع جديدة للتجارة الإلكترونية', time: '09:30', type: 'received' }
        ],
        mobile: [
            { sender: 'مدير القسم', message: 'تطبيق iOS الجديد جاهز للاختبار النهائي', time: '14:00', type: 'received' },
            { sender: 'مطور Flutter', message: 'واجهة تطبيق Android تحتاج بعض التحسينات', time: '14:15', type: 'received' }
        ],
        support: [
            { sender: 'مدير القسم', message: 'يوجد 5 طلبات دعم عاجلة تحتاج للمعالجة', time: '13:00', type: 'received' },
            { sender: 'فني دعم', message: 'تم حل 3 طلبات دعم، والباقي قيد المعالجة', time: '13:30', type: 'received' }
        ],
        hosting: [
            { sender: 'مدير القسم', message: 'الخوادم تعمل بشكل طبيعي، الأداء ممتاز', time: '12:00', type: 'received' },
            { sender: 'مسؤول النظام', message: 'تم إجراء النسخ الاحتياطي لجميع البيانات', time: '12:15', type: 'received' }
        ],
        consulting: [
            { sender: 'مدير القسم', message: 'تقرير الاستشارات التقنية جاهز للتقديم', time: '15:00', type: 'received' },
            { sender: 'مستشار تقني', message: 'حلول تكامل الأنظمة تحتاج للموافقة النهائية', time: '15:30', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'مراجعة تقارير الأداء الشهرية', 
                dueDate: '2024-12-25', 
                priority: 'high', 
                description: 'مراجعة تقارير أداء جميع الأقسام للشهر الحالي',
                completed: false 
            },
            { 
                id: 2, 
                title: 'اجتماع مع مدراء الأقسام', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'اجتماع لتقييم الأداء ومناقشة الخطط المستقبلية',
                completed: false 
            },
            { 
                id: 3, 
                title: 'اعتماد ميزانية الربع الأول', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'مراجعة واعتماد الميزانية المالية للربع الأول من 2025',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تخطيط الاستراتيجية السنوية', 
                dueDate: '2025-01-15', 
                priority: 'high', 
                description: 'وضع الخطط الاستراتيجية للشركة للعام القادم',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تقييم أداء الموظفين', 
                dueDate: '2025-01-30', 
                priority: 'medium', 
                description: 'إجراء تقييمات أداء لجميع موظفي الشركة',
                completed: false 
            },
            { 
                id: 6, 
                title: 'اجتماع مع الشركاء', 
                dueDate: '2025-02-10', 
                priority: 'low', 
                description: 'لقاء مع الشركاء والداعمين لمناقشة التعاون المستقبلي',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-25': [
            { id: 1, title: 'مراجعة تقارير الأداء الشهرية', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'اجتماع مع مدراء الأقسام', priority: 'medium' }
        ],
        '2024-12-31': [
            { id: 3, title: 'اعتماد ميزانية الربع الأول', priority: 'high' }
        ],
        '2025-01-15': [
            { id: 4, title: 'تخطيط الاستراتيجية السنوية', priority: 'high' }
        ],
        '2025-01-30': [
            { id: 5, title: 'تقييم أداء الموظفين', priority: 'medium' }
        ],
        '2025-02-10': [
            { id: 6, title: 'اجتماع مع الشركاء', priority: 'low' }
        ]
    }
};

const departmentDetailsData = {
    desktop: {
        manager: {
            name: 'أحمد محمد',
            role: 'مدير قسم تطوير تطبيقات سطح المكتب',
            employeeId: 'DESK-001',
            avatar: 'https://via.placeholder.com/100',
            department: 'تطوير تطبيقات سطح المكتب'
        },
        services: {
            csharp: {
                name: 'تطبيقات C#',
                employees: [
                    { name: 'محمد علي', role: 'مطور C# أول', employeeId: 'DESK-002', avatar: 'https://via.placeholder.com/80' },
                    { name: 'فاطمة أحمد', role: 'مطور C#', employeeId: 'DESK-003', avatar: 'https://via.placeholder.com/80' },
                    { name: 'خالد إبراهيم', role: 'مطور C#', employeeId: 'DESK-004', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            java: {
                name: 'تطبيقات Java',
                employees: [
                    { name: 'سارة محمد', role: 'مطور Java أول', employeeId: 'DESK-005', avatar: 'https://via.placeholder.com/80' },
                    { name: 'يوسف عبدالله', role: 'مطور Java', employeeId: 'DESK-006', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            python: {
                name: 'تطبيقات Python',
                employees: [
                    { name: 'ليان سعيد', role: 'مطور Python أول', employeeId: 'DESK-007', avatar: 'https://via.placeholder.com/80' },
                    { name: 'عمر خالد', role: 'مطور Python', employeeId: 'DESK-008', avatar: 'https://via.placeholder.com/80' },
                    { name: 'نورة حسن', role: 'مطور Python', employeeId: 'DESK-009', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            pos: {
                name: 'أنظمة POS',
                employees: [
                    { name: 'ريم عبدالرحمن', role: 'مطور أنظمة POS', employeeId: 'DESK-010', avatar: 'https://via.placeholder.com/80' },
                    { name: 'سامي محمد', role: 'مطور أنظمة POS', employeeId: 'DESK-011', avatar: 'https://via.placeholder.com/80' },
                    { name: 'هدى أحمد', role: 'مطور أنظمة POS', employeeId: 'DESK-012', avatar: 'https://via.placeholder.com/80' }
                ]
            }
        }
    },
    web: {
        manager: {
            name: 'سارة علي',
            role: 'مدير قسم تطوير أنظمة الويب',
            employeeId: 'WEB-001',
            avatar: 'https://via.placeholder.com/100',
            department: 'تطوير أنظمة الويب'
        },
        services: {
            accounting: {
                name: 'الأنظمة المحاسبية',
                employees: [
                    { name: 'أحمد سليمان', role: 'مطور Laravel', employeeId: 'WEB-002', avatar: 'https://via.placeholder.com/80' },
                    { name: 'مريم خالد', role: 'مطور Frontend', employeeId: 'WEB-003', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            cloud: {
                name: 'الأنظمة السحابية',
                employees: [
                    { name: 'ياسر محمد', role: 'مطور Node.js', employeeId: 'WEB-004', avatar: 'https://via.placeholder.com/80' },
                    { name: 'لينا أحمد', role: 'مطور React', employeeId: 'WEB-005', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            government: {
                name: 'الأنظمة الحكومية',
                employees: [
                    { name: 'نبيل عبدالله', role: 'مطور Django', employeeId: 'WEB-006', avatar: 'https://via.placeholder.com/80' },
                    { name: 'سلمى إبراهيم', role: 'مطور Vue.js', employeeId: 'WEB-007', avatar: 'https://via.placeholder.com/80' }
                ]
            },
            management: {
                name: 'أنظمة الإدارة',
                employees: [
                    { name: 'طارق حسن', role: 'مطور Full Stack', employeeId: 'WEB-008', avatar: 'https://via.placeholder.com/80' },
                    { name: 'آية محمد', role: 'مطور Frontend', employeeId: 'WEB-009', avatar: 'https://via.placeholder.com/80' }
                ]
            }
        }
    }
};
   
let activeChat = null;
let isLeftSidebarExpanded = false;
let currentDate = new Date();
let isCalendarOpen = false;
let sidebarWidth = 300;
let chatMode = 'sidebar';   

function initializeUser() {
    const userData = JSON.parse(localStorage.getItem('currentManagementUser')) || {
        full_name: 'محمد أحمد سليمان',
        username: 'manager',
        role: 'المدير العام',
        employee_id: 'MNG-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('o12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('o94').textContent = userData.full_name;
    document.getElementById('o96').textContent = userData.employee_id;
    document.getElementById('o8').src = userData.avatar;
    
    document.querySelector('.o10').textContent = userData.role;
}

function updateAllDates() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Riyadh'
    };
    
    const arabicDate = now.toLocaleDateString('ar-SA', options);
    
    const dateElements = [
        'o99'
    ];
    
    dateElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = arabicDate;
        }
    });
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ar-SA', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('o20').textContent = timeString;
}

function updateDashboardDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Riyadh'
    };
    
    const arabicDate = now.toLocaleDateString('ar-SA', options);
    
    document.getElementById('o99').textContent = arabicDate;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('o79').classList.add('open');
    
    initializeDashboard();
    initializeUser();
    loadNotifications();
    initializeCalendar();
    loadTasks();
    initializeResizableSidebar();
    
    updateClock();
    setInterval(updateClock, 1000);
    
    updateDashboardDate();
    
    if (!localStorage.getItem('currentManagementUser')) {
        const defaultUser = {
            full_name: 'محمد أحمد سليمان',
            username: 'manager',
            role: 'المدير العام',
            employee_id: 'MNG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentManagementUser', JSON.stringify(defaultUser));
    }
});

function toggleLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.toggle('open');
}

function closeLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.remove('open');
    closeActiveChat();
}

function minimizeLeftSidebar() {
    const leftSidebar = document.getElementById('o26');
    leftSidebar.classList.remove('open');
}

function toggleLeftSidebarExpand() {
    const leftSidebar = document.getElementById('o26');
    const expandIcon = document.getElementById('o31');
    
    leftSidebar.classList.toggle('expanded');
    
    if (leftSidebar.classList.contains('expanded')) {
        expandIcon.className = 'fas fa-compress';
        document.getElementById('o79').style.display = 'none';
        document.getElementById('o88').style.display = 'none';
    } else {
        expandIcon.className = 'fas fa-expand';
        document.getElementById('o79').style.display = 'block';
        document.getElementById('o88').style.display = 'block';
    }
}

function switchLeftTab(tabName) {
    document.querySelectorAll('.o33').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.o35').forEach(content => {
        content.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    if (tabName === 'notifications') {
        loadNotifications();
    } else if (tabName === 'tasks') {
        loadTasks();
    } else if (tabName === 'chat') {
        closeActiveChat();
    }
}

function loadNotifications() {
}

function markAllAsRead() {
    managementData.notifications.forEach(notification => {
        notification.unread = false;
    });
    const notificationElements = document.querySelectorAll('.o40');
    notificationElements.forEach(element => {
        element.classList.remove('o41');
    });
    alert('تم تحديد جميع الإشعارات كمقروءة');
}

function openChat(chatId) {
    activeChat = chatId;
    const chatTab = document.getElementById('chat');
    
    document.querySelector('.o47').style.display = 'none';
    document.querySelector('.o59').style.display = 'flex';
    document.querySelector('.o58').style.display = 'none';
    
    const chatNames = {
        management: 'مجموعة الإدارة',
        managers: 'مجموعة المدراء',
        desktop: 'قسم تطوير سطح المكتب',
        web: 'قسم تطوير الويب',
        design: 'قسم التصميم',
        mobile: 'قسم تطبيقات الجوال',
        support: 'قسم الصيانة والدعم',
        hosting: 'قسم الاستضافة',
        consulting: 'قسم الاستشارات'
    };
    
    document.getElementById('o63').textContent = chatNames[chatId] || 'محادثة';
    
    loadChatMessages(chatId);
    
    updateChatControls();
}

function closeActiveChat() {
    activeChat = null;
    document.querySelector('.o47').style.display = 'block';
    document.querySelector('.o59').style.display = 'none';
    document.querySelector('.o58').style.display = 'flex';
    chatMode = 'sidebar';
    
    const chatArea = document.getElementById('o57');
    const leftSidebar = document.getElementById('o26');
    chatArea.classList.remove('fullscreen');
    leftSidebar.classList.remove('chat-fullscreen');
}

function loadChatMessages(chatId) {
    const messagesContainer = document.getElementById('o67');
    messagesContainer.innerHTML = '';
    
    const messages = managementData.chatMessages[chatId] || [];
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type === 'received' ? 'received' : ''}`;
        messageElement.innerHTML = `
            <div class="message-sender">${message.sender}</div>
            <div class="message-content">${message.message}</div>
            <div class="message-time">${message.time}</div>
        `;
        messagesContainer.appendChild(messageElement);
    });
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendActiveChatMessage() {
    if (!activeChat) return;
    
    const messageInput = document.getElementById('o69');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        if (!managementData.chatMessages[activeChat]) {
            managementData.chatMessages[activeChat] = [];
        }
        
        managementData.chatMessages[activeChat].push({
            sender: 'أنت',
            message: messageText,
            time: new Date().toLocaleTimeString('ar-SA'),
            type: 'sent'
        });
        
        loadChatMessages(activeChat);
        messageInput.value = '';
        
        simulateReply(activeChat);
    }
}

function simulateReply(chatId) {
    setTimeout(() => {
        const replies = {
            management: 'شكراً على رسالتك، سنرد عليك قريباً',
            managers: 'تم استلام رسالتك، شكراً لك',
            desktop: 'مدير القسم: شكراً على المعلومة',
            web: 'مدير القسم: سنراجع الموضوع',
            design: 'مدير القسم: ممتاز، سنتابع',
            mobile: 'مدير القسم: شكراً على التحديث',
            support: 'مدير القسم: تم استلام الرسالة',
            hosting: 'مدير القسم: شكراً لك',
            consulting: 'مدير القسم: سنراجع الاقتراح'
        };
        
        if (!managementData.chatMessages[chatId]) {
            managementData.chatMessages[chatId] = [];
        }
        
        managementData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'مساعد المدير' : 'مدير القسم',
            message: replies[chatId],
            time: new Date().toLocaleTimeString('ar-SA'),
            type: 'received'
        });
        
        loadChatMessages(chatId);
    }, 2000);
}

function toggleChatFullscreen() {
    const chatArea = document.getElementById('o57');
    const leftSidebar = document.getElementById('o26');
    const fullscreenIcon = document.getElementById('o65');
    
    if (chatMode === 'sidebar') {
        chatArea.classList.add('fullscreen');
        leftSidebar.classList.add('chat-fullscreen');
        chatMode = 'fullscreen';
        fullscreenIcon.className = 'fas fa-compress';
    } else {
        chatArea.classList.remove('fullscreen');
        leftSidebar.classList.remove('chat-fullscreen');
        chatMode = 'sidebar';
        fullscreenIcon.className = 'fas fa-expand';
    }
}

function updateChatControls() {
    const fullscreenButton = document.querySelector('.o64 .o21');
    if (fullscreenButton) {
        if (chatMode === 'fullscreen') {
            fullscreenButton.innerHTML = '<i class="fas fa-compress"></i>';
            fullscreenButton.title = 'تصغير المحادثة';
        } else {
            fullscreenButton.innerHTML = '<i class="fas fa-expand"></i>';
            fullscreenButton.title = 'تكبير المحادثة';
        }
    }
}

function loadTasks() {
    loadCurrentTasks();
    loadUpcomingTasks();
}

function loadCurrentTasks() {
    const currentTasksContainer = document.getElementById('o76');
    currentTasksContainer.innerHTML = '';
    
    managementData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    managementData.tasks.future.forEach(task => {
        const taskElement = createTaskElement(task);
        upcomingTasksContainer.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.className = `task-item priority-${task.priority}`;
    taskElement.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-due">${formatDate(task.dueDate)}</div>
        <div class="task-description">${task.description}</div>
    `;
    
    taskElement.addEventListener('click', () => {
        showTaskDetails(task);
    });
    
    return taskElement;
}

function showTaskDetails(task) {
    alert(`تفاصيل المهمة: ${task.title}\n\nالوصف: ${task.description}\nتاريخ الاستحقاق: ${formatDate(task.dueDate)}\nالأولوية: ${getPriorityText(task.priority)}`);
}

function getPriorityText(priority) {
    const priorities = {
        'high': 'عالية',
        'medium': 'متوسطة', 
        'low': 'منخفضة'
    };
    return priorities[priority] || priority;
}

function initializeCalendar() {
    updateMiniCalendar();
}

function updateMiniCalendar() {
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('o84').textContent = `${months[month]} ${year}`;
    
    const calendarDays = document.getElementById('o86');
    calendarDays.innerHTML = '';
    
    const dayNames = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
    dayNames.forEach(dayName => {
        const dayElement = document.createElement('div');
        dayElement.className = 'mini-calendar-day day-header';
        dayElement.textContent = dayName;
        calendarDays.appendChild(dayElement);
    });
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'mini-calendar-day';
        dayElement.textContent = day;
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        const dayTasks = managementData.calendarTasks[dateString] || [];
        if (dayTasks.length > 0) {
            const highestPriority = getHighestPriority(dayTasks);
            dayElement.classList.add('has-tasks', `${highestPriority}-priority`);
        }
        
        dayElement.addEventListener('click', () => {
            showAddTaskModal(dateString);
        });
        
        calendarDays.appendChild(dayElement);
    }
}

function toggleCalendar() {
    isCalendarOpen = !isCalendarOpen;
    const calendarModal = document.getElementById('om49');
    const miniCalendar = document.getElementById('o86');
    
    if (isCalendarOpen) {
        calendarModal.style.display = 'flex';
        updateFullCalendar();
    } else {
        calendarModal.style.display = 'none';
    }
}

function updateFullCalendar() {
    const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
                         'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('om52').textContent = `${months[month]} ${year}`;
    
    const calendarGrid = document.getElementById('om60');
    calendarGrid.innerHTML = '';
    
    const dayNames = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    dayNames.forEach(dayName => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day day-header';
        dayElement.textContent = dayName;
        calendarGrid.appendChild(dayElement);
    });
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const today = new Date();
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        const dayTasks = managementData.calendarTasks[dateString] || [];
        if (dayTasks.length > 0) {
            const highestPriority = getHighestPriority(dayTasks);
            dayElement.classList.add('has-tasks', `has-${highestPriority}-tasks`);
        }
        
        dayElement.innerHTML = `
            <div class="day-number">${day}</div>
            <div class="day-tasks">
                ${dayTasks.map(task => 
                    `<div class="day-task-item ${task.priority}">${task.title}</div>`
                ).join('')}
            </div>
        `;
        
        dayElement.addEventListener('click', () => {
            showDayTasks(dateString, dayTasks);
        });
        
        calendarGrid.appendChild(dayElement);
    }
}

function getHighestPriority(tasks) {
    if (tasks.some(task => task.priority === 'high')) return 'high';
    if (tasks.some(task => task.priority === 'medium')) return 'medium';
    return 'low';
}

function showDayTasks(dateString, tasks) {
    const tasksSidebar = document.getElementById('om55');
    
    tasksSidebar.innerHTML = `
        <div class="om56">
            <h5>المهام في ${formatDate(dateString)}</h5>
            <button class="o21 o37" onclick="showAddTaskModal('${dateString}')">إضافة مهمة</button>
        </div>
        ${tasks.length === 0 ? 
            '<p>لا توجد مهام في هذا اليوم</p>' : 
            tasks.map(task => `
                <div class="task-detail-item priority-${task.priority}">
                    <div class="task-detail-title">${task.title}</div>
                    <div class="task-detail-desc">${getTaskDescription(task.id)}</div>
                    <div class="task-actions">
                        <button class="o21 o37" onclick="completeTask(${task.id})">إكمال</button>
                        <button class="o21 o37 o22" onclick="deleteTask(${task.id}, '${dateString}')">حذف</button>
                    </div>
                </div>
            `).join('')
        }
    `;
}

function getTaskDescription(taskId) {
    const allTasks = [...managementData.tasks.current, ...managementData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...managementData.tasks.current, ...managementData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        managementData.tasks.current = managementData.tasks.current.filter(t => t.id !== taskId);
        managementData.tasks.future = managementData.tasks.future.filter(t => t.id !== taskId);
        
        if (managementData.calendarTasks[dateString]) {
            managementData.calendarTasks[dateString] = managementData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (managementData.calendarTasks[dateString].length === 0) {
                delete managementData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, managementData.calendarTasks[dateString] || []);
    }
}

function changeMonth(direction) {
    currentDate.setMonth(currentDate.getMonth() + direction);
    if (isCalendarOpen) {
        updateFullCalendar();
    } else {
        updateMiniCalendar();
    }
}

function showAddTaskModal(prefilledDate = null) {
    const modal = document.createElement('div');
    modal.className = 'om61';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="om63">
            <div class="om64">
                <h3>إضافة مهمة إدارية جديدة</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="om65">
                <div class="om67">
                    <label for="taskTitle">عنوان المهمة</label>
                    <input type="text" id="taskTitle" class="om69" placeholder="أدخل عنوان المهمة">
                </div>
                <div class="om67">
                    <label for="taskDate">تاريخ المهمة</label>
                    <input type="date" id="taskDate" class="om69" value="${prefilledDate || ''}">
                </div>
                <div class="om67">
                    <label for="taskPriority">أولوية المهمة</label>
                    <select id="taskPriority" class="om69">
                        <option value="high">عالي</option>
                        <option value="medium">متوسط</option>
                        <option value="low">منخفض</option>
                    </select>
                </div>
                <div class="om67">
                    <label for="taskDescription">وصف المهمة</label>
                    <textarea id="taskDescription" class="om69" rows="3" placeholder="أدخل وصف المهمة"></textarea>
                </div>
                <div class="om75">
                    <button class="o21 om21" onclick="saveNewTask()">حفظ المهمة</button>
                    <button class="o21 o22" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">إلغاء</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveNewTask() {
    const title = document.getElementById('taskTitle').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
    const description = document.getElementById('taskDescription').value;
    
    if (!title || !date) {
        alert('يرجى ملء العنوان والتاريخ');
        return;
    }
    
    const newTask = {
        id: Math.max(...[...managementData.tasks.current, ...managementData.tasks.future].map(t => t.id)) + 1,
        title: title,
        dueDate: date,
        priority: priority,
        description: description,
        completed: false
    };
    
    const taskDate = new Date(date);
    const today = new Date();
    const daysDifference = taskDate - today;
    const daysFromNow = Math.ceil(daysDifference / (1000 * 60 * 60 * 24));
    
    if (daysFromNow <= 30) {
        managementData.tasks.current.push(newTask);
    } else {
        managementData.tasks.future.push(newTask);
    }
    
    if (!managementData.calendarTasks[date]) {
        managementData.calendarTasks[date] = [];
    }
    managementData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, managementData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentManagementUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'محمد أحمد سليمان',
            username: 'manager',
            role: 'المدير العام',
            employee_id: 'MNG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentManagementUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
}

function updateStatsCards() {
    const totalDepartments = managementData.departments.length;
    const totalEmployees = managementData.departments.reduce((sum, dept) => sum + dept.employees, 0);
    const activeProjects = managementData.departments.reduce((sum, dept) => sum + dept.activeProjects, 0);
    
    const monthlyRevenue = "1,250,000 ر.س";

    document.getElementById('om4').textContent = totalDepartments;
    document.getElementById('om7').textContent = totalEmployees;
    document.getElementById('om9').textContent = activeProjects;
    document.getElementById('om11').textContent = monthlyRevenue;
}

function initializeCharts() {
    const departmentsChartCtx = document.getElementById('om14').getContext('2d');
    const departmentsChart = new Chart(departmentsChartCtx, {
        type: 'pie',
        data: {
            labels: managementData.departments.map(dept => dept.name),
            datasets: [{
                data: managementData.departments.map(dept => dept.employees),
                backgroundColor: [
                    '#27ae60', '#3498db', '#9b59b6', '#f39c12', 
                    '#e74c3c', '#1abc9c', '#d35400', '#8e44ad', '#c0392b'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });

    const performanceChartCtx = document.getElementById('om15').getContext('2d');
    const performanceChart = new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
            labels: managementData.departments.map(dept => dept.name),
            datasets: [{
                label: 'مؤشر الأداء %',
                data: managementData.departments.map(dept => dept.progress),
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

function toggleSidebar() {
    const sidebar = document.getElementById('o79');
    sidebar.classList.toggle('open');
}

function showTab(tabId) {
    document.querySelectorAll('.o89').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.o80 a').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.o80 a[onclick="showTab('${tabId}')"]`).classList.add('active');
    
    if (tabId === 'dashboard') {
        updateDashboardStats();
    } else if (tabId === 'departments') {
        document.getElementById('departmentDetails').style.display = 'none';
    }
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentManagementUser');
        window.location.href = 'login.html';
    }
}

function openDepartment(departmentId) {
    document.getElementById('departments').style.display = 'none';
    document.getElementById('departmentDetails').style.display = 'block';
    
    document.getElementById('deptDetailTitle').textContent = getDepartmentName(departmentId);
    document.getElementById('deptDetailSubtitle').textContent = 'معلومات القسم والموظفين';
    
    loadDepartmentDetails(departmentId);
}

function loadDepartmentDetails(departmentId) {
    const department = managementData.departments.find(dept => 
        dept.name.includes(getDepartmentName(departmentId))
    );
    
    if (department) {
        document.getElementById('deptManagerName').textContent = department.manager;
        document.getElementById('deptManagerRole').textContent = 'مدير القسم';
        document.getElementById('deptEmployeeCount').textContent = department.employees;
        document.getElementById('deptProjectCount').textContent = department.activeProjects;
        document.getElementById('deptProgress').textContent = department.progress + '%';
        
        loadDepartmentServices(departmentId);
    }
}

function loadDepartmentServices(departmentId) {
    const servicesContainer = document.getElementById('deptServicesContainer');
    servicesContainer.innerHTML = '';
    
    const managerCard = createManagerCard(departmentId);
    servicesContainer.appendChild(managerCard);
    
    const departmentData = departmentDetailsData[departmentId];
    if (departmentData && departmentData.services) {
        Object.keys(departmentData.services).forEach(serviceKey => {
            const service = departmentData.services[serviceKey];
            const serviceCard = createServiceCard(service, departmentId, serviceKey);
            servicesContainer.appendChild(serviceCard);
        });
    } else {
        const department = managementData.departments.find(dept => 
            dept.name.includes(getDepartmentName(departmentId))
        );
        
        if (department && department.services) {
            department.services.forEach(service => {
                const serviceCard = createBasicServiceCard(service, departmentId);
                servicesContainer.appendChild(serviceCard);
            });
        }
    }
}

function createManagerCard(departmentId) {
    const departmentData = departmentDetailsData[departmentId];
    const manager = departmentData ? departmentData.manager : {
        name: 'مدير القسم',
        role: 'مدير القسم',
        employeeId: 'MGR-001',
        avatar: 'https://via.placeholder.com/100'
    };
    
    const card = document.createElement('div');
    card.className = 'om29 department-manager-card';
    card.innerHTML = `
        <div class="manager-avatar">
            <img src="${manager.avatar}" alt="${manager.name}">
        </div>
        <div class="om30">
            <h4>${manager.name}</h4>
            <span class="om31 om32">مدير القسم</span>
        </div>
        <div class="manager-info">
            <p><strong>الوظيفة:</strong> ${manager.role}</p>
            <p><strong>رقم الموظف:</strong> ${manager.employeeId}</p>
            <p><strong>القسم:</strong> ${getDepartmentName(departmentId)}</p>
        </div>
        <div class="om40">
            <button class="o21 o37" onclick="openEmployeePage('${manager.employeeId}')">عرض الملف</button>
        </div>
    `;
    
    return card;
}

function createServiceCard(service, departmentId, serviceKey) {
    const card = document.createElement('div');
    card.className = 'om29 service-card';
    card.innerHTML = `
        <div class="om30">
            <h4>${service.name}</h4>
            <span class="om31 om32">${service.employees.length} موظف</span>
        </div>
        <p>خدمة ${service.name} المتخصصة في قسم ${getDepartmentName(departmentId)}</p>
        <div class="om35">
            <span class="om36"><i class="fas fa-users"></i> ${service.employees.length} موظف</span>
            <span class="om36"><i class="fas fa-tasks"></i> ${Math.floor(Math.random() * 5) + 3} مشروع</span>
        </div>
        <div class="service-employees">
            <h5>الموظفون:</h5>
            <div class="employees-grid">
                ${service.employees.map(employee => `
                    <div class="employee-item" onclick="openEmployeePage('${employee.employeeId}')">
                        <img src="${employee.avatar}" alt="${employee.name}">
                        <div class="employee-info">
                            <div class="employee-name">${employee.name}</div>
                            <div class="employee-role">${employee.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="om40">
            <button class="o21 o37" onclick="openServicePage('${departmentId}', '${serviceKey}')">عرض الخدمة</button>
        </div>
    `;
    
    return card;
}

function createBasicServiceCard(serviceName, departmentId) {
    const card = document.createElement('div');
    card.className = 'om29 service-card';
    card.innerHTML = `
        <div class="om30">
            <h4>${serviceName}</h4>
            <span class="om31 om32">خدمة</span>
        </div>
        <p>خدمة ${serviceName} في قسم ${getDepartmentName(departmentId)}</p>
        <div class="om35">
            <span class="om36"><i class="fas fa-users"></i> ${Math.floor(Math.random() * 5) + 2} موظف</span>
            <span class="om36"><i class="fas fa-tasks"></i> ${Math.floor(Math.random() * 4) + 2} مشروع</span>
        </div>
        <div class="om40">
            <button class="o21 o37" onclick="openServicePage('${departmentId}', '${serviceName}')">عرض الخدمة</button>
        </div>
    `;
    
    return card;
}

function openEmployeePage(employeeId) {
    window.open(`employee_${employeeId}.html`, '_blank');
}

function openServicePage(departmentId, serviceKey) {
    window.open(`service_${departmentId}_${serviceKey}.html`, '_blank');
}

function getDepartmentName(departmentId) {
    const names = {
        'desktop': 'تطوير تطبيقات سطح المكتب',
        'web': 'تطوير أنظمة الويب',
        'design': 'تصميم مواقع الويب',
        'mobile': 'تطبيقات الهواتف المحمولة',
        'support': 'الصيانة والدعم الفني',
        'hosting': 'الاستضافة والخوادم',
        'consulting': 'الاستشارات التقنية',
        'accounting': 'المحاسبة والمالية',
        'partners': 'الشركاء والداعمين'
    };
    return names[departmentId] || departmentId;
}

function showAddSystemModal() {
    document.getElementById('om62').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveSystem() {
    const name = document.getElementById('om68').value;
    const department = document.getElementById('om70').value;
    const type = document.getElementById('om71').value;
    const status = document.getElementById('om72').value;
    const date = document.getElementById('om73').value;
    const description = document.getElementById('om74').value;
    
    if (!name || !department || !type || !status) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const table = document.getElementById('om22');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${document.getElementById('om70').options[document.getElementById('om70').selectedIndex].text}</td>
        <td>${date}</td>
        <td><span class="status-${status === 'completed' ? 'completed' : status === 'inprogress' ? 'inprogress' : 'pending'}">${status === 'completed' ? 'مكتمل' : status === 'inprogress' ? 'قيد التنفيذ' : 'معلق'}</span></td>
        <td>
            <button class="o21 o37">عرض</button>
            <button class="o21 o37 o22">حذف</button>
        </td>
    `;
    table.appendChild(newRow);
    
    closeModal('om62');
    alert('تم إضافة النشاط بنجاح');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
}

function initializeResizableSidebar() {
    const sidebar = document.getElementById('o79');
    const mainContent = document.getElementById('o88');
    let isResizing = false;

    sidebar.addEventListener('mousedown', function(e) {
        if (e.offsetX < 10) {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (!isResizing) return;
        
        const newWidth = window.innerWidth - e.clientX;
        if (newWidth > 200 && newWidth < 500) {
            sidebar.style.width = newWidth + 'px';
            mainContent.style.marginRight = newWidth + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        isResizing = false;
        document.body.style.cursor = 'default';
    });
}


function openEmployeeManagementSystem() {
    window.open('fre.html', '_blank');
    
    // window.location.href = 'employee_management_system.html';
}








const systemData = {
    departments: [
        { 
            id: 'finance', 
            name: 'المالية', 
            icon: '💰', 
            description: 'إدارة الأمور المالية والمحاسبية',
            color: '#10b981',
            employees: 15,
            projects: 8,
            progress: 85
        },
        { 
            id: 'marketing', 
            name: 'التسويق', 
            icon: '📊', 
            description: 'خطط وتنفيذ الحملات التسويقية',
            color: '#f59e0b',
            employees: 12,
            projects: 15,
            progress: 78
        },
        { 
            id: 'sales', 
            name: 'المبيعات', 
            icon: '🛒', 
            description: 'إدارة عمليات البيع والمبيعات',
            color: '#3b82f6',
            employees: 20,
            projects: 25,
            progress: 92
        },
        { 
            id: 'hr', 
            name: 'شؤون الموظفين', 
            icon: '👥', 
            description: 'إدارة شؤون الموظفين والمزايا',
            color: '#ef4444',
            employees: 8,
            projects: 6,
            progress: 88
        },
        { 
            id: 'customer-service', 
            name: 'خدمة العملاء', 
            icon: '🎧', 
            description: 'دعم وخدمة عملاء الشركة',
            color: '#8b5cf6',
            employees: 18,
            projects: 12,
            progress: 95
        },
        { 
            id: 'subscribers', 
            name: 'خدمة المشتركين', 
            icon: '⭐', 
            description: 'إدارة خدمات الاشتراكات',
            color: '#06b6d4',
            employees: 10,
            projects: 8,
            progress: 90
        },
        { 
            id: 'monitoring', 
            name: 'الرقابة', 
            icon: '👁️', 
            description: 'مراقبة أداء الأقسام والموظفين',
            color: '#f97316',
            employees: 6,
            projects: 4,
            progress: 82
        },
        { 
            id: 'logistics', 
            name: 'اللوجيستك', 
            icon: '🚚', 
            description: 'إدارة سلسلة التوريد والشحن',
            color: '#84cc16',
            employees: 14,
            projects: 10,
            progress: 87
        },
        { 
            id: 'technology', 
            name: 'التكنولوجيا', 
            icon: '💻', 
            description: 'إدارة البنية التقنية والأنظمة',
            color: '#6366f1',
            employees: 25,
            projects: 18,
            progress: 94
        },
        { 
            id: 'branches', 
            name: 'الفروع', 
            icon: '🏢', 
            description: 'إدارة فروع الشركة المختلفة',
            color: '#ec4899',
            employees: 30,
            projects: 22,
            progress: 89
        },
        { 
            id: 'development', 
            name: 'التطوير', 
            icon: '🚀', 
            description: 'تطوير منتجات وخدمات الشركة',
            color: '#d946ef',
            employees: 22,
            projects: 16,
            progress: 91
        },
        { 
            id: 'services', 
            name: 'الخدمات', 
            icon: '🛠️', 
            description: 'إدارة الخدمات المقدمة للعملاء',
            color: '#14b8a6',
            employees: 16,
            projects: 14,
            progress: 85
        },
        { 
            id: 'partners', 
            name: 'شركاء النجاح', 
            icon: '🤝', 
            description: 'الشركات التابعة للشركة الأم',
            color: '#f43f5e',
            employees: 12,
            projects: 9,
            progress: 83
        }
    ]
};

function loadDepartmentsGrid() {
    const grid = document.getElementById('departmentsGrid');
    grid.innerHTML = '';
    
    systemData.departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.innerHTML = `
            <div class="department-icon">${dept.icon}</div>
            <div class="department-name">${dept.name}</div>
            <div class="department-desc">${dept.description}</div>
            <div class="om35" style="margin-top: 1rem;">
                <span class="om36"><i class="fas fa-users"></i> ${dept.employees} موظف</span>
                <span class="om36"><i class="fas fa-project-diagram"></i> ${dept.projects} مشروع</span>
            </div>
            <div class="om37" style="margin-top: 1rem;">
                <div class="om38">
                    <div class="om39" style="width: ${dept.progress}%"></div>
                </div>
                <span>${dept.progress}%</span>
            </div>
            <div class="om40" style="margin-top: 1rem;">
                <button class="o21 o37" onclick="event.stopPropagation(); openDepartment('${dept.id}')">تفاصيل</button>
            </div>
        `;
        card.onclick = () => openDepartment(dept.id);
        grid.appendChild(card);
    });
}

function openDepartment(deptId) {
    document.getElementById('departments').style.display = 'none';
    document.getElementById('departmentDetails').style.display = 'block';
    
    const department = systemData.departments.find(d => d.id === deptId);
    
    document.getElementById('deptDetailTitle').textContent = department.name;
    document.getElementById('deptDetailSubtitle').textContent = department.description;
    
    document.getElementById('deptManagerName').textContent = `مدير ${department.name}`;
    document.getElementById('deptManagerRole').textContent = 'مدير القسم';
    document.getElementById('deptEmployeeCount').textContent = department.employees;
    document.getElementById('deptProjectCount').textContent = department.projects;
    document.getElementById('deptProgress').textContent = department.progress + '%';
    
    loadDepartmentServices(deptId);
}

function loadDepartmentServices(deptId) {
    const servicesContainer = document.getElementById('deptServicesContainer');
    servicesContainer.innerHTML = '';
    
    const department = systemData.departments.find(d => d.id === deptId);
    
    const managerCard = createManagerCard(deptId);
    servicesContainer.appendChild(managerCard);
    
    const services = getDepartmentServices(deptId);
    services.forEach(service => {
        const serviceCard = createServiceCard(service, deptId);
        servicesContainer.appendChild(serviceCard);
    });
}

function createManagerCard(deptId) {
    const department = systemData.departments.find(d => d.id === deptId);
    
    const card = document.createElement('div');
    card.className = 'om29 department-manager-card';
    card.innerHTML = `
        <div class="manager-avatar">
            <div style="width: 100px; height: 100px; border-radius: 50%; background: ${department.color}; display: flex; align-items: center; justify-content: center; font-size: 2em; color: white;">
                ${department.icon}
            </div>
        </div>
        <div class="om30">
            <h4>مدير ${department.name}</h4>
            <span class="om31 om32">مدير القسم</span>
        </div>
        <div class="manager-info">
            <p><strong>القسم:</strong> ${department.name}</p>
            <p><strong>عدد الموظفين:</strong> ${department.employees}</p>
            <p><strong>المشاريع النشطة:</strong> ${department.projects}</p>
        </div>
        <div class="om40">
            <button class="o21 o37">عرض الملف</button>
        </div>
    `;
    
    return card;
}

function createServiceCard(service, deptId) {
    const department = systemData.departments.find(d => d.id === deptId);
    
    const card = document.createElement('div');
    card.className = 'om29 service-card';
    card.innerHTML = `
        <div class="om30">
            <h4>${service.name}</h4>
            <span class="om31 om32">${service.employees} موظف</span>
        </div>
        <p>${service.description}</p>
        <div class="om35">
            <span class="om36"><i class="fas fa-users"></i> ${service.employees} موظف</span>
            <span class="om36"><i class="fas fa-tasks"></i> ${service.projects} مشروع</span>
        </div>
        <div class="service-employees">
            <h5>المسؤولون:</h5>
            <div class="employees-grid">
                ${service.responsible.map(emp => `
                    <div class="employee-item">
                        <div style="width: 40px; height: 40px; border-radius: 50%; background: ${department.color}; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                            ${emp.name.charAt(0)}
                        </div>
                        <div class="employee-info">
                            <div class="employee-name">${emp.name}</div>
                            <div class="employee-role">${emp.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="om40">
            <button class="o21 o37">عرض الخدمة</button>
        </div>
    `;
    
    return card;
}

function getDepartmentServices(deptId) {
    const servicesData = {
        finance: [
            { name: 'الميزانية', description: 'إدارة الميزانية والتخطيط المالي', employees: 5, projects: 3, responsible: [
                { name: 'أحمد علي', role: 'مدير مالي' },
                { name: 'فاطمة محمد', role: 'محاسب' }
            ]},
            { name: 'المصروفات', description: 'تتبع وتسجيل المصروفات', employees: 4, projects: 2, responsible: [
                { name: 'خالد إبراهيم', role: 'مراقب مالي' }
            ]}
        ],
        marketing: [
            { name: 'الحملات التسويقية', description: 'إدارة وتنفيذ الحملات', employees: 6, projects: 8, responsible: [
                { name: 'سارة عبدالله', role: 'مدير تسويق' }
            ]}
        ]
    };
    
    return servicesData[deptId] || [
        { name: 'الخدمات الأساسية', description: 'الخدمات الرئيسية للقسم', employees: 8, projects: 6, responsible: [
            { name: 'مدير القسم', role: 'المسؤول' },
            { name: 'نائب المدير', role: 'مساعد' }
        ]}
    ];
}

function updateDashboardStats() {
    const totalDepartments = systemData.departments.length;
    const totalEmployees = systemData.departments.reduce((sum, dept) => sum + dept.employees, 0);
    const activeProjects = systemData.departments.reduce((sum, dept) => sum + dept.projects, 0);
    
    document.getElementById('om4').textContent = totalDepartments;
    document.getElementById('om7').textContent = totalEmployees;
    document.getElementById('om9').textContent = activeProjects;
}

function initializeCharts() {
    const departmentsChartCtx = document.getElementById('om14').getContext('2d');
    const departmentsChart = new Chart(departmentsChartCtx, {
        type: 'pie',
        data: {
            labels: systemData.departments.map(dept => dept.name),
            datasets: [{
                data: systemData.departments.map(dept => dept.employees),
                backgroundColor: systemData.departments.map(dept => dept.color)
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });

    const performanceChartCtx = document.getElementById('om15').getContext('2d');
    const performanceChart = new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
            labels: systemData.departments.map(dept => dept.name),
            datasets: [{
                label: 'مؤشر الأداء %',
                data: systemData.departments.map(dept => dept.progress),
                backgroundColor: systemData.departments.map(dept => dept.color)
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('o79').classList.add('open');
    
    initializeDashboard();
    initializeUser();
    loadNotifications();
    initializeCalendar();
    loadTasks();
    initializeResizableSidebar();
    
    updateClock();
    setInterval(updateClock, 1000);
    
    updateDashboardDate();
    
    if (!localStorage.getItem('currentManagementUser')) {
        const defaultUser = {
            full_name: 'محمد أحمد سليمان',
            username: 'manager',
            role: 'المدير العام',
            employee_id: 'MNG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentManagementUser', JSON.stringify(defaultUser));
    }
    
    loadDepartmentsGrid();
});





function showTab(tabId) {
    document.querySelectorAll('.o89').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.o80 a').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.o80 a[onclick="showTab('${tabId}')"]`).classList.add('active');
    
    if (tabId === 'dashboard') {
        updateDashboardStats();
        initializeCharts(); 
    } else if (tabId === 'departments') {
        document.getElementById('departmentDetails').style.display = 'none';
        document.getElementById('departments').style.display = 'block';
        loadDepartmentsGrid();
    }
}

function loadDepartmentsGrid() {
    const grid = document.getElementById('departmentsGrid');
    if (!grid) {
        console.error('Element with id departmentsGrid not found');
        return;
    }
    
    grid.innerHTML = '';
    
    systemData.departments.forEach(dept => {
        const card = document.createElement('div');
        card.className = 'department-card';
        card.style.cursor = 'pointer';
        card.style.transition = 'all 0.3s ease';
        card.innerHTML = `
            <div class="department-icon">${dept.icon}</div>
            <div class="department-name">${dept.name}</div>
            <div class="department-desc">${dept.description}</div>
            <div class="om35" style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                <span class="om36" style="background: #f8f9fa; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem;">
                    <i class="fas fa-users"></i> ${dept.employees} موظف
                </span>
                <span class="om36" style="background: #f8f9fa; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.8rem;">
                    <i class="fas fa-project-diagram"></i> ${dept.projects} مشروع
                </span>
            </div>
            <div class="om37" style="margin-top: 1rem; display: flex; align-items: center; gap: 1rem;">
                <div class="om38" style="flex: 1; height: 8px; background: #e9ecef; border-radius: 4px; overflow: hidden;">
                    <div class="om39" style="height: 100%; background: ${dept.color}; width: ${dept.progress}%"></div>
                </div>
                <span style="font-size: 0.9rem; font-weight: bold; color: ${dept.color};">${dept.progress}%</span>
            </div>
            <div class="om40" style="margin-top: 1rem;">
                <button class="o21 o37" onclick="event.stopPropagation(); openDepartment('${dept.id}')" 
                        style="background: ${dept.color}; border: none; padding: 0.5rem 1rem; border-radius: 5px; color: white; cursor: pointer;">
                    تفاصيل
                </button>
            </div>
        `;
        card.onclick = () => openDepartment(dept.id);
        grid.appendChild(card);
    });
}

function updateDashboardStats() {
    const totalDepartments = systemData.departments.length;
    const totalEmployees = systemData.departments.reduce((sum, dept) => sum + dept.employees, 0);
    const activeProjects = systemData.departments.reduce((sum, dept) => sum + dept.projects, 0);
    
    if (document.getElementById('om4')) {
        document.getElementById('om4').textContent = totalDepartments;
    }
    if (document.getElementById('om7')) {
        document.getElementById('om7').textContent = totalEmployees;
    }
    if (document.getElementById('om9')) {
        document.getElementById('om9').textContent = activeProjects;
    }
    if (document.getElementById('om11')) {
        document.getElementById('om11').textContent = '2,500,000 ر.س';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('تهيئة التطبيق...');
    
    if (document.getElementById('o79')) {
        document.getElementById('o79').classList.add('open');
    }
    
    initializeDashboard();
    initializeUser();
    loadNotifications();
    initializeCalendar();
    loadTasks();
    
    updateClock();
    setInterval(updateClock, 1000);
    
    updateDashboardDate();
    
    setTimeout(() => {
        loadDepartmentsGrid();
    }, 100);
    
    if (!localStorage.getItem('currentManagementUser')) {
        const defaultUser = {
            full_name: 'محمد أحمد سليمان',
            username: 'manager',
            role: 'المدير العام',
            employee_id: 'MNG-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentManagementUser', JSON.stringify(defaultUser));
    }
});

window.addEventListener('load', function() {
    console.log('الصفحة محملة بالكامل');
    loadDepartmentsGrid();
});








function openDepartmentPage(departmentId) {
    
    window.location.href = `department_${departmentId}i.html`;
}









































function openDepartmentPage(departmentId) {
    const pageMapping = {
        'finance': 'mh.html',
        'marketing': 'mar.html',
        'sales': 'mab.html',
        'hr': 'sm.html',
        'customer-service': 'ko.html',
        'subscribers': 'km.html',
        'monitoring': 'r.html',   
        'logistics': 'lo.html',     
        'technology': 'te.html', 
        'branches': 'branches_department.html',       
        'development': 'development_department.html',
        'services': 'services_department.html', 
        'partners': 'sh.html'   
    };
    
    const pageUrl = pageMapping[departmentId] || 'department_default.html';
    
    window.location.href = pageUrl;
}

function openFinanceDepartment() {
    window.location.href = 'mal.html';
}

function openMarketingDepartment() {
    window.location.href = 'mar.html';
}

function openSalesDepartment() {
    window.location.href = 'sales_department.html';
}

function openHRDepartment() {
    window.location.href = 'hr_department.html';
}

function openCustomerServiceDepartment() {
    window.location.href = 'customer_service_department.html';
}

function openSubscribersDepartment() {
    window.location.href = 'subscribers_department.html';
}

function openMonitoringDepartment() {
    window.location.href = 'monitoring_department.html';
}

function openLogisticsDepartment() {
    window.location.href = 'logistics_department.html';
}

function openTechnologyDepartment() {
    window.location.href = 'technology_department.html';
}

function openBranchesDepartment() {
    window.location.href = 'branches_department.html';
}

function openDevelopmentDepartment() {
    window.location.href = 'development_department.html';
}

function openServicesDepartment() {
    window.location.href = 'services_department.html';
}

function openPartnersDepartment() {
    window.location.href = 'partners_department.html';
}