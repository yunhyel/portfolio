
const lists = document.querySelectorAll('#skillList li');
lists.forEach((el, key) => {
    const name = $(el).text();
    $(el).html(`
        <div class="box" style="background-image:url('./images/${name.replace(/\s+/g, '').toLowerCase()}.png')"></div>
        <p>${name}</p>
    `);
})

$('*[data-copy]').on('click', function() {
    const content = $(this).data('copy');
    window.navigator.clipboard.writeText(content);
    notify(`
        클립보드에 제 이메일이 복사되었습니다.
        메일로 연락 주세요 :-)
    `);
})


function notify(msg) {
    const target = $('#notify');
    target.find('p').html(msg);
    target.fadeIn(300);
    setTimeout(() => {
        target.fadeOut(300, () => {
            target.find('p').html('');
        });
    }, 3000);
}