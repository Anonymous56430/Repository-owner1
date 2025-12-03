// بيانات نظام إدارة المبيعات
const salesData = {
    clients: [
        { 
            id: 1, 
            name: 'شركة التقنية المتطورة', 
            email: 'info@tech.com', 
            phone: '+966500000001',
            company: 'شركة التقنية المتطورة',
            city: 'الرياض',
            status: 'نشط',
            joinDate: '2023-10-01'
        },
        { 
            id: 2, 
            name: 'مؤسسة النهضة', 
            email: 'contact@nahda.com', 
            phone: '+966500000002',
            company: 'مؤسسة النهضة',
            city: 'جدة',
            status: 'نشط',
            joinDate: '2023-10-02'
        },
        { 
            id: 3, 
            name: 'شركة المستقبل', 
            email: 'sales@future.com', 
            phone: '+966500000003',
            company: 'شركة المستقبل',
            city: 'الدمام',
            status: 'محتمل',
            joinDate: '2023-10-03'
        },
        { 
            id: 4, 
            name: 'مستشفى الأمل', 
            email: 'info@al-amal.com', 
            phone: '+966500000004',
            company: 'مستشفى الأمل',
            city: 'الرياض',
            status: 'نشط',
            joinDate: '2023-09-20'
        },
        { 
            id: 5, 
            name: 'شركة البناء الحديث', 
            email: 'contact@modern-build.com', 
            phone: '+966500000005',
            company: 'شركة البناء الحديث',
            city: 'مكة',
            status: 'متوقف',
            joinDate: '2023-08-15'
        }
    ],
    
    deals: [
        { 
            id: 1, 
            clientId: 1,
            name: 'صفقة شركة التقنية',
            value: 150000,
            status: 'مكتمل',
            progress: 100,
            startDate: '2023-10-01',
            endDate: '2023-12-15',
            description: 'نظام مبيعات متكامل مع دعم فني لمدة سنة',
            products: ['نظام مبيعات', 'دعم فني'],
            assignedTo: 'أحمد'
        },
        { 
            id: 2, 
            clientId: 2,
            name: 'صفقة مؤسسة النهضة',
            value: 85000,
            status: 'قيد التنفيذ',
            progress: 75,
            startDate: '2023-11-01',
            endDate: '2024-02-28',
            description: 'تطبيق إدارة علاقات العملاء مع تدريب الموظفين',
            products: ['تطبيق CRM', 'تدريب'],
            assignedTo: 'محمد'
        },
        { 
            id: 3, 
            clientId: 3,
            name: 'صفقة شركة المستقبل',
            value: 120000,
            status: 'قيد التنفيذ',
            progress: 60,
            startDate: '2023-12-01',
            endDate: '2024-03-30',
            description: 'حلول متكاملة لإدارة الأعمال',
            products: ['نظام ERP', 'استشارات'],
            assignedTo: 'سارة'
        }
    ],
    
    leads: [
        { 
            id: 1, 
            name: 'شركة التقنية الجديدة',
            company: 'شركة التقنية الجديدة',
            email: 'info@newtech.com',
            phone: '+966500000006',
            source: 'معرض التقنية',
            status: 'جديد',
            value: 200000,
            probability: 20,
            assignedTo: 'أحمد',
            createdDate: '2024-01-15',
            nextFollowup: '2024-01-20',
            description: 'عميل محتمل من معرض التقنية - يحتاج نظام مبيعات متكامل'
        },
        { 
            id: 2, 
            name: 'مؤسسة التعمير',
            company: 'مؤسسة التعمير',
            email: 'contact@taameer.com',
            phone: '+966500000007',
            source: 'الموقع الإلكتروني',
            status: 'متابعة',
            value: 150000,
            probability: 60,
            assignedTo: 'محمد',
            createdDate: '2024-01-10',
            nextFollowup: '2024-01-18',
            description: 'عميل مهتم بحلول إدارة المشاريع - جلسة تعريفية مجدولة'
        },
        { 
            id: 3, 
            name: 'مستشفى الأمل',
            company: 'مستشفى الأمل',
            email: 'purchase@al-amal.com',
            phone: '+966500000008',
            source: 'التوصية',
            status: 'معلق',
            value: 300000,
            probability: 40,
            assignedTo: 'سارة',
            createdDate: '2024-01-05',
            nextFollowup: '2024-02-01',
            description: 'يحتاج نظام إدارة المستشفيات - في انتظار الميزانية'
        }
    ],
    
    notifications: [
        { id: 1, title: 'صفقة جديدة', description: 'تم إضافة صفقة جديدة بقيمة 50,000 ريال من شركة التقنية', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'متابعة عميل', description: 'يجب متابعة العميل محمد أحمد قبل نهاية اليوم', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تقرير المبيعات', description: 'تقرير مبيعات الشهر جاهز للمراجعة', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'اجتماع الفريق', description: 'اجتماع فريق المبيعات الساعة 2:00 ظهراً', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'الإدارة', message: 'ما هو تقدم العمل على صفقة شركة المستقبل؟', time: '10:00', type: 'received' }
        ],
        salesManager: [
            { sender: 'مدير المبيعات', message: 'أهلاً بك، هل هناك أي استفسارات؟', time: '09:30', type: 'received' }
        ],
        northTeam: [
            { sender: 'أحمد', message: 'مرحبا بالجميع، كيف حال العمل على صفقات منطقة الشمال؟', time: '10:30', type: 'received' }
        ],
        southTeam: [
            { sender: 'محمد', message: 'التقرير الأسبوعي لفريق الجنوب جاهز للمراجعة', time: '09:15', type: 'received' }
        ],
        onlineTeam: [
            { sender: 'سارة', message: 'المبيعات الإلكترونية شهدت زيادة 15% هذا الأسبوع', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'متابعة صفقة شركة المستقبل', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'متابعة العميل للتفاوض على الشروط النهائية',
                completed: false 
            },
            { 
                id: 2, 
                title: 'إعداد عرض سعر لمؤسسة التعمير', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'إعداد عرض سعر مفصل يتضمن جميع المتطلبات',
                completed: false 
            },
            { 
                id: 3, 
                title: 'مراجعة تقرير المبيعات الشهري', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'مراجعة وتحليل تقرير أداء المبيعات للشهر الحالي',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'اجتماع مع فريق المبيعات', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'اجتماع لتقييم الأداء وتحديد الأهداف القادمة',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تدريب المندوبين الجدد', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'تدريب المندوبين الجدد على منتجات الشركة واستراتيجيات البيع',
                completed: false 
            },
            { 
                id: 6, 
                title: 'تحديث قاعدة بيانات العملاء', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'مراجعة وتحديث معلومات جميع العملاء في النظام',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'متابعة صفقة شركة المستقبل', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'إعداد عرض سعر لمؤسسة التعمير', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'مراجعة تقرير المبيعات الشهري', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'اجتماع مع فريق المبيعات', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تدريب المندوبين الجدد', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'تحديث قاعدة بيانات العملاء', priority: 'low' }
        ]
    }
};

// متغيرات عامة
let activeChat = null;
let isLeftSidebarExpanded = false;
let currentDate = new Date();
let isCalendarOpen = false;
let sidebarWidth = 300;
let chatMode = 'sidebar'; // 'sidebar' أو 'fullscreen'

// دوال المستخدم المحدثة
function initializeUser() {
    const userData = JSON.parse(localStorage.getItem('currentSalesUser')) || {
        full_name: 'أحمد محمد علي',
        username: 'sales_manager',
        role: 'مدير مبيعات',
        employee_id: 'SALES-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('o12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('o94').textContent = userData.full_name;
    document.getElementById('o96').textContent = userData.employee_id;
    document.getElementById('o8').src = userData.avatar;
    
    document.querySelector('.o10').textContent = userData.role;
}

// دالة لتحديث التواريخ في جميع الصفحات
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
        'o99', 'om20', 'om23', 
        'om25', 'om26', 'om27', 
        'om43', 'om44'
    ];
    
    dateElements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = arabicDate;
        }
    });
}

// دالة تحديث الساعة
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

// دالة تحديث التاريخ الميلادي
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

// تهيئة التطبيق المحدثة
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
    
    if (!localStorage.getItem('currentSalesUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد علي',
            username: 'sales_manager',
            role: 'مدير مبيعات',
            employee_id: 'SALES-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSalesUser', JSON.stringify(defaultUser));
    }
});

// دوال الشريط الأيسر
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
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    if (tabName === 'notifications') {
        loadNotifications();
    } else if (tabName === 'tasks') {
        loadTasks();
    } else if (tabName === 'chat') {
        closeActiveChat();
    }
}

function loadNotifications() {
    // تم تعبئة الإشعارات مباشرة في HTML
}

function markAllAsRead() {
    salesData.notifications.forEach(notification => {
        notification.unread = false;
    });
    const notificationElements = document.querySelectorAll('.o40');
    notificationElements.forEach(element => {
        element.classList.remove('o41');
    });
    alert('تم تحديد جميع الإشعارات كمقروءة');
}

// دوال الشات
function openChat(chatId) {
    activeChat = chatId;
    const chatTab = document.getElementById('chatTab');
    
    document.querySelector('.o47').style.display = 'none';
    document.querySelector('.o59').style.display = 'flex';
    document.querySelector('.o58').style.display = 'none';
    
    const chatNames = {
        management: 'الإدارة',
        salesManager: 'مدير المبيعات',
        northTeam: 'فريق الشمال',
        southTeam: 'فريق الجنوب',
        onlineTeam: 'فريق المبيعات الإلكترونية'
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
    
    const messages = salesData.chatMessages[chatId] || [];
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${message.type === 'received' ? 'received' : 'sent'}`;
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
        if (!salesData.chatMessages[activeChat]) {
            salesData.chatMessages[activeChat] = [];
        }
        
        salesData.chatMessages[activeChat].push({
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
            salesManager: 'تم استلام رسالتك، شكراً لك',
            northTeam: 'أحمد: شكراً على المعلومة',
            southTeam: 'محمد: ممتاز، سأراجعه',
            onlineTeam: 'سارة: سأراجع الأرقام'
        };
        
        if (!salesData.chatMessages[chatId]) {
            salesData.chatMessages[chatId] = [];
        }
        
        salesData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'الإدارة' : 
                   chatId === 'salesManager' ? 'مدير المبيعات' :
                   chatId === 'northTeam' ? 'أحمد' :
                   chatId === 'southTeam' ? 'محمد' : 'سارة',
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

// دوال المهام
function loadTasks() {
    loadCurrentTasks();
    loadUpcomingTasks();
}

function loadCurrentTasks() {
    const currentTasksContainer = document.getElementById('o76');
    currentTasksContainer.innerHTML = '';
    
    salesData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('o77');
    upcomingTasksContainer.innerHTML = '';
    
    salesData.tasks.future.forEach(task => {
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

// دوال التقويم
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
        
        const dayTasks = salesData.calendarTasks[dateString] || [];
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
    const miniCalendar = document.getElementById('miniCalendar');
    
    if (isCalendarOpen) {
        calendarModal.style.display = 'flex';
        miniCalendar.style.display = 'none';
        updateFullCalendar();
    } else {
        calendarModal.style.display = 'none';
        miniCalendar.style.display = 'block';
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
        
        const dayTasks = salesData.calendarTasks[dateString] || [];
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
    const allTasks = [...salesData.tasks.current, ...salesData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...salesData.tasks.current, ...salesData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        salesData.tasks.current = salesData.tasks.current.filter(t => t.id !== taskId);
        salesData.tasks.future = salesData.tasks.future.filter(t => t.id !== taskId);
        
        if (salesData.calendarTasks[dateString]) {
            salesData.calendarTasks[dateString] = salesData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (salesData.calendarTasks[dateString].length === 0) {
                delete salesData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, salesData.calendarTasks[dateString] || []);
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

// دوال إضافة المهام
function showAddTaskModal(prefilledDate = null) {
    const modal = document.createElement('div');
    modal.className = 'om61';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="om63">
            <div class="om64">
                <h3>إضافة مهمة مبيعات جديدة</h3>
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
        id: Math.max(...[...salesData.tasks.current, ...salesData.tasks.future].map(t => t.id)) + 1,
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
        salesData.tasks.current.push(newTask);
    } else {
        salesData.tasks.future.push(newTask);
    }
    
    if (!salesData.calendarTasks[date]) {
        salesData.calendarTasks[date] = [];
    }
    salesData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, salesData.calendarTasks[date]);
    }
    
    document.querySelector('.om61').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentSalesUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد علي',
            username: 'sales_manager',
            role: 'مدير مبيعات',
            employee_id: 'SALES-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentSalesUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadClients();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentDeals();
}

function updateStatsCards() {
    const totalSales = salesData.deals.reduce((sum, deal) => sum + deal.value, 0);
    const activeDeals = salesData.deals.filter(d => d.status === 'قيد التنفيذ').length;
    const newClients = salesData.clients.filter(c => {
        const joinDate = new Date(c.joinDate);
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        return joinDate > monthAgo;
    }).length;
    
    // حساب معدل التحويل (نسبة الصفقات المكتملة إلى إجمالي الصفقات)
    const completedDeals = salesData.deals.filter(d => d.status === 'مكتمل').length;
    const conversionRate = salesData.deals.length > 0 ? Math.round((completedDeals / salesData.deals.length) * 100) : 0;

    document.getElementById('om4').textContent = totalSales.toLocaleString();
    document.getElementById('om7').textContent = activeDeals;
    document.getElementById('om9').textContent = newClients;
    document.getElementById('om11').textContent = conversionRate + '%';
}

function loadRecentDeals() {
    // تم تعبئة الصفقات مباشرة في HTML
}

function initializeCharts() {
    const salesChartCtx = document.getElementById('om14').getContext('2d');
    const salesChart = new Chart(salesChartCtx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [{
                label: 'المبيعات الشهرية',
                data: [120000, 150000, 180000, 200000, 220000, 240000, 260000, 280000, 300000, 320000, 340000, 2450000],
                backgroundColor: 'rgba(39, 174, 96, 0.2)',
                borderColor: 'rgba(39, 174, 96, 1)',
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const regionChartCtx = document.getElementById('om15').getContext('2d');
    const regionChart = new Chart(regionChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['الرياض', 'جدة', 'الدمام', 'مكة', 'المدينة'],
            datasets: [{
                data: [40, 25, 20, 10, 5],
                backgroundColor: ['#27ae60', '#e74c3c', '#3498db', '#f39c12', '#9b59b6']
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
}

// دوال التنقل والواجهة
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
    } else if (tabId === 'clients') {
        loadClients();
    } else if (tabId === 'leads') {
        loadLeads();
    } else if (tabId === 'deals') {
        loadDeals();
    }
}

function showReportTab(reportId) {
    document.querySelectorAll('.om47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.om45 .om46').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(reportId).style.display = 'block';
    event.target.classList.add('active');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentSalesUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة العملاء
function showAddClientModal() {
    document.getElementById('addClientModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveClient() {
    const name = document.getElementById('clientName').value;
    const email = document.getElementById('clientEmail').value;
    const phone = document.getElementById('clientPhone').value;
    const company = document.getElementById('clientCompany').value;
    const city = document.getElementById('clientCity').value;
    const status = document.getElementById('clientStatus').value;
    
    if (!name || !email || !phone) {
        alert('يرجى ملء الحقول المطلوبة');
        return;
    }
    
    const newClient = {
        id: salesData.clients.length + 1,
        name: name,
        email: email,
        phone: phone,
        company: company,
        city: city,
        status: status,
        joinDate: new Date().toISOString().split('T')[0]
    };
    
    salesData.clients.push(newClient);
    closeModal('addClientModal');
    loadClients();
    alert('تم إضافة العميل بنجاح');
}

function loadClients() {
    const clientsTable = document.getElementById('om22');
    clientsTable.innerHTML = '';
    
    salesData.clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${client.id}</td>
            <td>${client.name}</td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.city}</td>
            <td><span class="client-badge client-${client.status === 'نشط' ? 'active' : client.status === 'محتمل' ? 'potential' : 'inactive'}">${client.status}</span></td>
            <td>
                <button class="o21 o37" onclick="editClient(${client.id})">تعديل</button>
                <button class="o21 o37 o22" onclick="deleteClient(${client.id})">حذف</button>
            </td>
        `;
        clientsTable.appendChild(row);
    });
}

function editClient(clientId) {
    const client = salesData.clients.find(c => c.id === clientId);
    if (client) {
        alert(`تعديل العميل: ${client.name}`);
    }
}

function deleteClient(clientId) {
    if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
        const clientIndex = salesData.clients.findIndex(c => c.id === clientId);
        if (clientIndex !== -1) {
            salesData.clients.splice(clientIndex, 1);
            loadClients();
            alert('تم حذف العميل بنجاح');
        }
    }
}

function exportClients() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "رقم العميل,اسم العميل,البريد الإلكتروني,الهاتف,الشركة,المدينة,الحالة,تاريخ الانضمام\n"
        + salesData.clients.map(client => 
            `${client.id},${client.name},${client.email},${client.phone},${client.company},${client.city},${client.status},${client.joinDate}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "عملاء_نظام_المبيعات.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال الفرص والقيادات
function loadLeads() {
    // تم تعبئة الفرص مباشرة في HTML
}

function openLeadDetails(leadId) {
    const lead = getLeadById(leadId);
    if (lead) {
        alert(`تفاصيل الفرصة: ${lead.name}\n\n${lead.description}\n\nالحالة: ${lead.status}\nنسبة النجاح: ${lead.probability}%`);
    }
}

function getLeadById(leadId) {
    const leadMap = {
        'lead1': salesData.leads[0],
        'lead2': salesData.leads[1],
        'lead3': salesData.leads[2]
    };
    return leadMap[leadId];
}

function convertLeadToDeal(leadId) {
    event.stopPropagation();
    const lead = getLeadById(leadId);
    if (lead) {
        alert(`تحويل الفرصة "${lead.name}" إلى صفقة جديدة`);
    }
}

function scheduleFollowup(leadId) {
    event.stopPropagation();
    const lead = getLeadById(leadId);
    if (lead) {
        alert(`جدولة متابعة للفرصة "${lead.name}"`);
    }
}

// دوال الصفقات
function loadDeals() {
    // تم تعبئة الصفقات مباشرة في HTML
}

function openDealDetails(dealId) {
    const deal = getDealById(dealId);
    if (deal) {
        alert(`تفاصيل الصفقة: ${deal.name}\n\n${deal.description}\n\nالحالة: ${deal.status}\nالتقدم: ${deal.progress}%`);
    }
}

function getDealById(dealId) {
    const dealMap = {
        'deal1': salesData.deals[0],
        'deal2': salesData.deals[1],
        'deal3': salesData.deals[2]
    };
    return dealMap[dealId];
}

function generateInvoice(dealId) {
    event.stopPropagation();
    const deal = getDealById(dealId);
    if (deal) {
        alert(`إنشاء فاتورة للصفقة "${deal.name}" بقيمة ${deal.value.toLocaleString()} ريال`);
    }
}

function viewDealReport(dealId) {
    event.stopPropagation();
    const deal = getDealById(dealId);
    if (deal) {
        alert(`عرض تقرير الصفقة: ${deal.name}`);
    }
}

function updateDealProgress(dealId) {
    event.stopPropagation();
    const deal = getDealById(dealId);
    if (deal) {
        alert(`تحديث تقدم الصفقة "${deal.name}"`);
    }
}

function sendReminder(dealId) {
    event.stopPropagation();
    const deal = getDealById(dealId);
    if (deal) {
        alert(`إرسال تذكير للصفقة "${deal.name}"`);
    }
}

// دوال مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
}

// دوال السحب والتغيير
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