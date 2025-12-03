// بيانات نظام التسويق المتكامل
const marketingData = {
    campaigns: [
        { 
            id: 1, 
            name: 'حملة الصيف 2024', 
            type: 'وسائل تواصل', 
            platform: 'فيسبوك',
            status: 'نشطة', 
            budget: 5000,
            startDate: '2024-06-01',
            description: 'حملة لإطلاق المنتج الجديد على منصة فيسبوك',
            progress: 75,
            team: ['أحمد (منشئ)', 'سارة (مصمم)', 'محمد (محلل)']
        },
        { 
            id: 2, 
            name: 'عروض التخفيض', 
            type: 'بريد إلكتروني', 
            platform: 'بريد إلكتروني',
            status: 'مكتملة', 
            budget: 2000,
            startDate: '2024-05-15',
            description: 'حملة بريدية للعروض والتخفيضات',
            progress: 100,
            team: ['محمد (كاتب)', 'فاطمة (مصمم)']
        },
        { 
            id: 3, 
            name: 'إعلانات جوجل', 
            type: 'إعلانات مدفوعة', 
            platform: 'جوجل',
            status: 'نشطة', 
            budget: 8000,
            startDate: '2024-06-10',
            description: 'حملة إعلانية على محرك بحث جوجل',
            progress: 60,
            team: ['خالد (منشئ)', 'ليان (محلل)']
        },
        { 
            id: 4, 
            name: 'تعزيز العلامة التجارية', 
            type: 'وسائل تواصل', 
            platform: 'إنستغرام',
            status: 'قيد المراجعة', 
            budget: 2500,
            startDate: '2024-07-01',
            description: 'تعزيز الوعي بالعلامة التجارية على إنستغرام',
            progress: 40,
            team: ['ليان (منشئ)', 'خالد (مصمم)']
        }
    ],
    
    notifications: [
        { id: 1, title: 'حملة عاجلة', description: 'يجب إطلاق الحملة الإعلانية الجديدة قبل نهاية اليوم', time: '10:30', unread: true, priority: 'high' },
        { id: 2, title: 'تحليل البيانات', description: 'تقرير أداء الحملات الشهري جاهز للمراجعة', time: '09:15', unread: true, priority: 'medium' },
        { id: 3, title: 'تحديث المنصة', description: 'تم إضافة ميزات جديدة لإدارة وسائل التواصل الاجتماعي', time: 'أمس', unread: false, priority: 'low' },
        { id: 4, title: 'تسليم التقرير', description: 'تقرير أداء الربع الأول يحتاج للتسليم النهائي', time: 'الاثنين', unread: true, priority: 'high' }
    ],
    
    chatMessages: {
        management: [
            { sender: 'مدير التسويق', message: 'ما هو تقدم العمل على حملة الصيف؟', time: '10:00', type: 'received' }
        ],
        socialMediaTeam: [
            { sender: 'فريق السوشيال ميديا', message: 'المنشورات الجديدة جاهزة للنشر', time: '09:30', type: 'received' }
        ],
        contentTeam: [
            { sender: 'فريق المحتوى', message: 'المحتوى الأسبوعي جاهز للمراجعة', time: '10:30', type: 'received' }
        ],
        designTeam: [
            { sender: 'فريق التصميم', message: 'التصاميم الجديدة تحتاج للموافقة', time: '09:15', type: 'received' }
        ],
        analyticsTeam: [
            { sender: 'فريق التحليلات', message: 'تحليل أداء الحملات يحتاج تحديث', time: 'أمس', type: 'received' }
        ]
    },
    
    tasks: {
        current: [
            { 
                id: 1, 
                title: 'إطلاق حملة الصيف الجديدة', 
                dueDate: '2024-12-31', 
                priority: 'high', 
                description: 'الإطلاق الرسمي لحملة الصيف 2024',
                completed: false 
            },
            { 
                id: 2, 
                title: 'مراجعة تحليلات الأداء', 
                dueDate: '2024-12-28', 
                priority: 'medium', 
                description: 'مراجعة وتحليل أداء الحملات الحالية',
                completed: false 
            },
            { 
                id: 3, 
                title: 'تحديث استراتيجية المحتوى', 
                dueDate: '2024-12-25', 
                priority: 'low', 
                description: 'تحديث خطة المحتوى للربع القادم',
                completed: false 
            }
        ],
        future: [
            { 
                id: 4, 
                title: 'تخطيط حملة العيد', 
                dueDate: '2024-01-25', 
                priority: 'high', 
                description: 'التخطيط والتحضير لحملة العيد القادمة',
                completed: false 
            },
            { 
                id: 5, 
                title: 'تدريب فريق التسويق', 
                dueDate: '2024-02-01', 
                priority: 'medium', 
                description: 'تدريب الفريق على أدوات التسويق الجديدة',
                completed: false 
            },
            { 
                id: 6, 
                title: 'مراجعة الميزانية', 
                dueDate: '2024-02-15', 
                priority: 'low', 
                description: 'مراجعة ميزانية التسويق للربع القادم',
                completed: false 
            }
        ]
    },
    
    calendarTasks: {
        '2024-12-31': [
            { id: 1, title: 'إطلاق حملة الصيف الجديدة', priority: 'high' }
        ],
        '2024-12-28': [
            { id: 2, title: 'مراجعة تحليلات الأداء', priority: 'medium' }
        ],
        '2024-12-25': [
            { id: 3, title: 'تحديث استراتيجية المحتوى', priority: 'low' }
        ],
        '2024-01-25': [
            { id: 4, title: 'تخطيط حملة العيد', priority: 'high' }
        ],
        '2024-02-01': [
            { id: 5, title: 'تدريب فريق التسويق', priority: 'medium' }
        ],
        '2024-02-15': [
            { id: 6, title: 'مراجعة الميزانية', priority: 'low' }
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
    const userData = JSON.parse(localStorage.getItem('currentMarketingUser')) || {
        full_name: 'أحمد محمد علي',
        username: 'marketer',
        role: 'مسوق محترف',
        employee_id: 'MARK-001',
        avatar: 'https://via.placeholder.com/50'
    };
    
    document.getElementById('m12').textContent = `مرحبا، ${userData.full_name.split(' ')[0]}`;
    document.getElementById('m94').textContent = userData.full_name;
    document.getElementById('m96').textContent = userData.employee_id;
    document.getElementById('m8').src = userData.avatar;
    
    document.querySelector('.m10').textContent = userData.role;
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
        'm99', 'mm20', 'mm25', 
        'mm26', 'mm27', 'mm43', 
        'mm44', 'mm53', 'mm54'
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
    document.getElementById('m20').textContent = timeString;
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
    
    document.getElementById('m99').textContent = arabicDate;
}

// تهيئة التطبيق المحدثة
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('m79').classList.add('open');
    
    initializeDashboard();
    initializeUser();
    loadNotifications();
    initializeCalendar();
    loadTasks();
    initializeResizableSidebar();
    
    updateClock();
    setInterval(updateClock, 1000);
    
    updateDashboardDate();
    
    if (!localStorage.getItem('currentMarketingUser')) {
        const defaultUser = {
            full_name: 'أحمد محمد علي',
            username: 'marketer',
            role: 'مسوق محترف',
            employee_id: 'MARK-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentMarketingUser', JSON.stringify(defaultUser));
    }
});

// دوال الشريط الأيسر
function toggleLeftSidebar() {
    const leftSidebar = document.getElementById('m26');
    leftSidebar.classList.toggle('open');
}

function closeLeftSidebar() {
    const leftSidebar = document.getElementById('m26');
    leftSidebar.classList.remove('open');
    closeActiveChat();
}

function minimizeLeftSidebar() {
    const leftSidebar = document.getElementById('m26');
    leftSidebar.classList.remove('open');
}

function toggleLeftSidebarExpand() {
    const leftSidebar = document.getElementById('m26');
    const expandIcon = document.getElementById('m31');
    
    leftSidebar.classList.toggle('expanded');
    
    if (leftSidebar.classList.contains('expanded')) {
        expandIcon.className = 'fas fa-compress';
        document.getElementById('m79').style.display = 'none';
        document.getElementById('m88').style.display = 'none';
    } else {
        expandIcon.className = 'fas fa-expand';
        document.getElementById('m79').style.display = 'block';
        document.getElementById('m88').style.display = 'block';
    }
}

function switchLeftTab(tabName) {
    document.querySelectorAll('.m33').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.m35').forEach(content => {
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
    marketingData.notifications.forEach(notification => {
        notification.unread = false;
    });
    const notificationElements = document.querySelectorAll('.m40');
    notificationElements.forEach(element => {
        element.classList.remove('m41');
    });
    alert('تم تحديد جميع الإشعارات كمقروءة');
}

// دوال الشات
function openChat(chatId) {
    activeChat = chatId;
    const chatTab = document.getElementById('chatTab');
    
    document.querySelector('.m47').style.display = 'none';
    document.querySelector('.m59').style.display = 'flex';
    document.querySelector('.m58').style.display = 'none';
    
    const chatNames = {
        management: 'مدير التسويق',
        socialMediaTeam: 'فريق السوشيال ميديا',
        contentTeam: 'فريق المحتوى',
        designTeam: 'فريق التصميم',
        analyticsTeam: 'فريق التحليلات'
    };
    
    document.getElementById('m63').textContent = chatNames[chatId] || 'محادثة';
    
    loadChatMessages(chatId);
    
    updateChatControls();
}

function closeActiveChat() {
    activeChat = null;
    document.querySelector('.m47').style.display = 'block';
    document.querySelector('.m59').style.display = 'none';
    document.querySelector('.m58').style.display = 'flex';
    chatMode = 'sidebar';
    
    const chatArea = document.getElementById('m57');
    const leftSidebar = document.getElementById('m26');
    chatArea.classList.remove('fullscreen');
    leftSidebar.classList.remove('chat-fullscreen');
}

function loadChatMessages(chatId) {
    const messagesContainer = document.getElementById('m67');
    messagesContainer.innerHTML = '';
    
    const messages = marketingData.chatMessages[chatId] || [];
    
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
    
    const messageInput = document.getElementById('m69');
    const messageText = messageInput.value.trim();
    
    if (messageText) {
        if (!marketingData.chatMessages[activeChat]) {
            marketingData.chatMessages[activeChat] = [];
        }
        
        marketingData.chatMessages[activeChat].push({
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
            management: 'شكراً على رسالتك، سنراجع التقدم قريباً',
            socialMediaTeam: 'تم استلام المنشورات، شكراً لجهودكم',
            contentTeam: 'سأراجع المحتوى وأعود لكم بالتغذية الراجعة',
            designTeam: 'التصاميم رائعة، سنوافق عليها قريباً',
            analyticsTeam: 'شكراً على التحديث، سنحلل البيانات'
        };
        
        if (!marketingData.chatMessages[chatId]) {
            marketingData.chatMessages[chatId] = [];
        }
        
        marketingData.chatMessages[chatId].push({
            sender: chatId === 'management' ? 'مدير التسويق' : 
                   chatId === 'socialMediaTeam' ? 'فريق السوشيال ميديا' :
                   chatId === 'contentTeam' ? 'فريق المحتوى' :
                   chatId === 'designTeam' ? 'فريق التصميم' : 'فريق التحليلات',
            message: replies[chatId],
            time: new Date().toLocaleTimeString('ar-SA'),
            type: 'received'
        });
        
        loadChatMessages(chatId);
    }, 2000);
}

function toggleChatFullscreen() {
    const chatArea = document.getElementById('m57');
    const leftSidebar = document.getElementById('m26');
    const fullscreenIcon = document.getElementById('m65');
    
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
    const fullscreenButton = document.querySelector('.m64 .m21');
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
    const currentTasksContainer = document.getElementById('m76');
    currentTasksContainer.innerHTML = '';
    
    marketingData.tasks.current.forEach(task => {
        const taskElement = createTaskElement(task);
        currentTasksContainer.appendChild(taskElement);
    });
}

function loadUpcomingTasks() {
    const upcomingTasksContainer = document.getElementById('m77');
    upcomingTasksContainer.innerHTML = '';
    
    marketingData.tasks.future.forEach(task => {
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
    
    document.getElementById('m84').textContent = `${months[month]} ${year}`;
    
    const calendarDays = document.getElementById('m86');
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
        
        const dayTasks = marketingData.calendarTasks[dateString] || [];
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
    const calendarModal = document.getElementById('mm62');
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
    
    document.getElementById('mm65').textContent = `${months[month]} ${year}`;
    
    const calendarGrid = document.getElementById('mm73');
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
        
        const dayTasks = marketingData.calendarTasks[dateString] || [];
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
    const tasksSidebar = document.getElementById('mm68');
    
    tasksSidebar.innerHTML = `
        <div class="mm69">
            <h5>المهام في ${formatDate(dateString)}</h5>
            <button class="m21 m37" onclick="showAddTaskModal('${dateString}')">إضافة مهمة</button>
        </div>
        ${tasks.length === 0 ? 
            '<p>لا توجد مهام في هذا اليوم</p>' : 
            tasks.map(task => `
                <div class="task-detail-item priority-${task.priority}">
                    <div class="task-detail-title">${task.title}</div>
                    <div class="task-detail-desc">${getTaskDescription(task.id)}</div>
                    <div class="task-actions">
                        <button class="m21 m37" onclick="completeTask(${task.id})">إكمال</button>
                        <button class="m21 m37 m22" onclick="deleteTask(${task.id}, '${dateString}')">حذف</button>
                    </div>
                </div>
            `).join('')
        }
    `;
}

function getTaskDescription(taskId) {
    const allTasks = [...marketingData.tasks.current, ...marketingData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    return task ? task.description : 'لا يوجد وصف';
}

function completeTask(taskId) {
    const allTasks = [...marketingData.tasks.current, ...marketingData.tasks.future];
    const task = allTasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        alert(`تم إكمال المهمة: ${task.title}`);
        loadTasks();
    }
}

function deleteTask(taskId, dateString) {
    if (confirm('هل أنت متأكد من حذف هذه المهمة؟')) {
        marketingData.tasks.current = marketingData.tasks.current.filter(t => t.id !== taskId);
        marketingData.tasks.future = marketingData.tasks.future.filter(t => t.id !== taskId);
        
        if (marketingData.calendarTasks[dateString]) {
            marketingData.calendarTasks[dateString] = marketingData.calendarTasks[dateString].filter(t => t.id !== taskId);
            if (marketingData.calendarTasks[dateString].length === 0) {
                delete marketingData.calendarTasks[dateString];
            }
        }
        
        loadTasks();
        updateMiniCalendar();
        if (isCalendarOpen) {
            updateFullCalendar();
        }
        showDayTasks(dateString, marketingData.calendarTasks[dateString] || []);
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
    modal.className = 'mm74';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="mm76">
            <div class="mm77">
                <h3>إضافة مهمة تسويقية جديدة</h3>
                <button onclick="this.parentElement.parentElement.parentElement.remove()">&times;</button>
            </div>
            <div class="mm78">
                <div class="mm80">
                    <label for="taskTitle">عنوان المهمة</label>
                    <input type="text" id="taskTitle" class="mm82" placeholder="أدخل عنوان المهمة">
                </div>
                <div class="mm80">
                    <label for="taskDate">تاريخ المهمة</label>
                    <input type="date" id="taskDate" class="mm82" value="${prefilledDate || ''}">
                </div>
                <div class="mm80">
                    <label for="taskPriority">أولوية المهمة</label>
                    <select id="taskPriority" class="mm82">
                        <option value="high">عالي</option>
                        <option value="medium">متوسط</option>
                        <option value="low">منخفض</option>
                    </select>
                </div>
                <div class="mm80">
                    <label for="taskDescription">وصف المهمة</label>
                    <textarea id="taskDescription" class="mm82" rows="3" placeholder="أدخل وصف المهمة"></textarea>
                </div>
                <div class="mm89">
                    <button class="m21 mm21" onclick="saveNewTask()">حفظ المهمة</button>
                    <button class="m21 m22" onclick="this.parentElement.parentElement.parentElement.parentElement.remove()">إلغاء</button>
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
        id: Math.max(...[...marketingData.tasks.current, ...marketingData.tasks.future].map(t => t.id)) + 1,
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
        marketingData.tasks.current.push(newTask);
    } else {
        marketingData.tasks.future.push(newTask);
    }
    
    if (!marketingData.calendarTasks[date]) {
        marketingData.calendarTasks[date] = [];
    }
    marketingData.calendarTasks[date].push({
        id: newTask.id,
        title: newTask.title,
        priority: newTask.priority
    });
    
    loadTasks();
    updateMiniCalendar();
    if (isCalendarOpen) {
        updateFullCalendar();
        showDayTasks(date, marketingData.calendarTasks[date]);
    }
    
    document.querySelector('.mm74').remove();
    alert('تم إضافة المهمة بنجاح');
}

// دوال لوحة التحكم الأساسية
function initializeDashboard() {
    let userData = JSON.parse(localStorage.getItem('currentMarketingUser'));
    if (!userData) {
        const defaultUser = {
            full_name: 'أحمد محمد علي',
            username: 'marketer',
            role: 'مسوق محترف',
            employee_id: 'MARK-001',
            avatar: 'https://via.placeholder.com/50'
        };
        localStorage.setItem('currentMarketingUser', JSON.stringify(defaultUser));
        userData = defaultUser;
    }

    initializeUser();
    updateDashboardStats();
    loadCampaigns();
    initializeCharts();
}

function updateDashboardStats() {
    updateStatsCards();
    loadRecentCampaigns();
}

function updateStatsCards() {
    const activeCampaigns = marketingData.campaigns.filter(c => c.status === 'نشطة').length;
    
    // إحصائيات افتراضية
    const engagementRate = 4.2;
    const newClients = 156;
    const roi = 320;

    document.getElementById('mm4').textContent = activeCampaigns;
    document.getElementById('mm7').textContent = engagementRate + '%';
    document.getElementById('mm9').textContent = newClients;
    document.getElementById('mm11').textContent = roi + '%';
}

function loadRecentCampaigns() {
    // تم تعبئة الحملات مباشرة في HTML
}

function initializeCharts() {
    const platformsChartCtx = document.getElementById('mm14').getContext('2d');
    const platformsChart = new Chart(platformsChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['فيسبوك', 'إنستغرام', 'تويتر', 'البريد الإلكتروني', 'جوجل'],
            datasets: [{
                data: [35, 25, 15, 15, 10],
                backgroundColor: ['#3b5998', '#e4405f', '#1da1f2', '#ea4335', '#4285f4']
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

    const campaignsChartCtx = document.getElementById('mm15').getContext('2d');
    const campaignsChart = new Chart(campaignsChartCtx, {
        type: 'line',
        data: {
            labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
            datasets: [{
                label: 'معدل التفاعل',
                data: [3.2, 3.8, 4.1, 3.9, 4.2, 4.5],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// دوال التنقل والواجهة
function toggleSidebar() {
    const sidebar = document.getElementById('m79');
    sidebar.classList.toggle('open');
}

function showTab(tabId) {
    document.querySelectorAll('.m89').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.m80 a').forEach(link => {
        link.classList.remove('active');
    });
    
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`.m80 a[onclick="showTab('${tabId}')"]`).classList.add('active');
    
    if (tabId === 'dashboard') {
        updateDashboardStats();
    } else if (tabId === 'campaigns') {
        loadCampaigns();
    }
}

function showReportTab(reportId) {
    document.querySelectorAll('.mm47').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('.mm45 .mm46').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(reportId).style.display = 'block';
    event.target.classList.add('active');
}

function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('currentMarketingUser');
        window.location.href = 'login.html';
    }
}

// دوال إدارة الحملات
function showAddCampaignModal() {
    document.getElementById('mm75').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function saveCampaign() {
    const name = document.getElementById('mm81').value;
    const type = document.getElementById('mm83').value;
    const platform = document.getElementById('mm84').value;
    const status = document.getElementById('mm85').value;
    const startDate = document.getElementById('mm86').value;
    const budget = document.getElementById('mm87').value;
    const description = document.getElementById('mm88').value;
    
    if (!name || !type || !platform || !status) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }
    
    const newCampaign = {
        id: marketingData.campaigns.length + 1,
        name: name,
        type: type,
        platform: platform,
        status: status,
        budget: parseInt(budget),
        startDate: startDate,
        description: description,
        progress: status === 'مكتملة' ? 100 : status === 'نشطة' ? 50 : 0,
        team: ['مسوق جديد']
    };
    
    marketingData.campaigns.push(newCampaign);
    closeModal('mm75');
    loadCampaigns();
    alert('تم إضافة الحملة بنجاح');
}

function loadCampaigns() {
    const campaignsTable = document.getElementById('mm52');
    campaignsTable.innerHTML = '';
    
    marketingData.campaigns.forEach(campaign => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${campaign.name}</td>
            <td>${campaign.type}</td>
            <td>${campaign.budget.toLocaleString()} ر.س</td>
            <td>${campaign.platform}</td>
            <td><span class="status-${campaign.status === 'مكتملة' ? 'completed' : campaign.status === 'نشطة' ? 'inprogress' : 'pending'}">${campaign.status}</span></td>
            <td>${formatDate(campaign.startDate)}</td>
            <td>
                <button class="m21 m37" onclick="editCampaign(${campaign.id})">تعديل</button>
                <button class="m21 m37 m22" onclick="deleteCampaign(${campaign.id})">حذف</button>
            </td>
        `;
        campaignsTable.appendChild(row);
    });
}

function editCampaign(campaignId) {
    const campaign = marketingData.campaigns.find(c => c.id === campaignId);
    if (campaign) {
        alert(`تعديل الحملة: ${campaign.name}`);
    }
}

function deleteCampaign(campaignId) {
    if (confirm('هل أنت متأكد من حذف هذه الحملة؟')) {
        const campaignIndex = marketingData.campaigns.findIndex(c => c.id === campaignId);
        if (campaignIndex !== -1) {
            marketingData.campaigns.splice(campaignIndex, 1);
            loadCampaigns();
            alert('تم حذف الحملة بنجاح');
        }
    }
}

function exportCampaigns() {
    const csvContent = "data:text/csv;charset=utf-8," 
        + "اسم الحملة,النوع,المنصة,الحالة,الميزانية,تاريخ البدء,الوصف\n"
        + marketingData.campaigns.map(campaign => 
            `${campaign.name},${campaign.type},${campaign.platform},${campaign.status},${campaign.budget},${campaign.startDate},${campaign.description}`
        ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "حملات_التسويق.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// دوال الحملات التفاعلية
function openCampaignDetails(campaignId) {
    const campaign = getCampaignById(campaignId);
    if (campaign) {
        alert(`تفاصيل الحملة: ${campaign.name}\n\n${campaign.description}\n\nالحالة: ${campaign.status}\nالتقدم: ${campaign.progress}%`);
    }
}

function getCampaignById(campaignId) {
    const campaignMap = {
        'social1': marketingData.campaigns[0],
        'social2': marketingData.campaigns[3],
        'social3': {name: 'تويتر - تفاعل المجتمع', description: 'بناء مجتمع تفاعلي على تويتر', status: 'نشطة', progress: 60},
        'email1': {name: 'نشرة إخبارية أسبوعية', description: 'نشرة إخبارية أسبوعية للمشتركين', status: 'نشطة', progress: 90},
        'email2': {name: 'سلسلة ترحيب بالعملاء الجدد', description: 'سلسلة بريدية ترحيبية للعملاء الجدد', status: 'نشطة', progress: 100}
    };
    return campaignMap[campaignId];
}

function viewCampaignReport(campaignId) {
    event.stopPropagation();
    const campaign = getCampaignById(campaignId);
    alert(`عرض تقرير الحملة: ${campaign.name}\n\nالتقرير جاهز للتحميل.`);
}

function schedulePost(campaignId) {
    event.stopPropagation();
    const campaign = getCampaignById(campaignId);
    alert(`جدولة منشور لحملة: ${campaign.name}\n\nيمكنك الآن جدولة المنشورات.`);
}

function viewEmailStats(campaignId) {
    event.stopPropagation();
    const campaign = getCampaignById(campaignId);
    alert(`إحصائيات البريد الإلكتروني: ${campaign.name}\n\nمعدل الفتح: 25%\nمعدل النقر: 4.2%`);
}

function createEmailCampaign() {
    event.stopPropagation();
    alert('إنشاء حملة بريد إلكتروني جديدة\n\nسيتم فتح نموذج إنشاء الحملة.');
}

// دوال SEO والمحتوى
function analyzeKeywords() {
    alert('تحليل الكلمات المفتاحية\n\nجاري تحليل أداء الكلمات المفتاحية...');
}

function trackRankings() {
    alert('تتبع الترتيب في محركات البحث\n\nجاري تحديث بيانات الترتيب...');
}

function analyzeCompetitors() {
    alert('تحليل المنافسين\n\nجاري تحليل استراتيجيات المنافسين...');
}

function generateSEORreport() {
    alert('تقرير تحسين محركات البحث\n\nجاري إنشاء التقرير الشامل...');
}

function viewContentCalendar() {
    alert('عرض تقويم المحتوى\n\nجاري تحميل تقويم المحتوى...');
}

function scheduleContent() {
    alert('جدولة محتوى جديد\n\nسيتم فتح نموذج جدولة المحتوى.');
}

function manageBlog() {
    alert('إدارة المدونة\n\nجاري تحميل لوحة إدارة المدونة...');
}

function createArticle() {
    alert('إنشاء مقال جديد\n\nسيتم فتح محرر المقالات.');
}

// دوال مساعدة
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ar-SA');
}

// دوال السحب والتغيير
function initializeResizableSidebar() {
    const sidebar = document.getElementById('m79');
    const mainContent = document.getElementById('m88');
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
