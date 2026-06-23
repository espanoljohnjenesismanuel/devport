/**
 * Standard Multi-Tab Routing Architecture
 */
function switchTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
    
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    window.scrollTo({ top: 140, behavior: 'smooth' });
}

/**
 * Sub-Tab Stage Swapping Engine (If added later)
 */
function switchSubTab(event, subTabId) {
    const section = event.currentTarget.closest('.tab-content');
    section.querySelectorAll('.sub-nav-btn').forEach(btn => btn.classList.remove('active'));
    section.querySelectorAll('.sub-tab-content').forEach(content => content.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    document.getElementById(subTabId).classList.add('active');
}