import "./lib/lib";
import $ from "./lib/lib";

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(()=>{
    $('.w500').fadeToggle(800);
});

$('.wrap').html(`
    <div class="dropdown">
        <buttons class="btn btn-primary dropdown-toggle" id="dropdown-menu-btn">Dropdown btn</buttons>
        <div class="dropdown-menu" data-toggle-id="dropdown-menu-btn">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action2</a>
            <a href="#" class="dropdown-item">Action3</a>
        </div>
    </div>
`);
$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis quos iusto, magni cul    dolore vel rem et nihil a hic, saepe aliquid quia praesentium perspiciatis ad. Ipsam, in quos?'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Information saved');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Information saved final');
                }
            ]
        ]
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));