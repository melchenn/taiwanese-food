//food descriptions and image link
$(document).ready(function() {
    var foodDetails = {
        'Beef Noodle Soup': {
            description: 'A rich and hearty broth filled with tender beef and noodles.',
            img: 'https://www.thespruceeats.com/thmb/ABkIbUeYTsxUQZYiFdJTzIK_r9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taiwanese-beef-noodle-soup-4777014-hero-01-e06a464badec476684e513cad44612da.jpg' 
        },
        'Gua Bao': {
            description: 'A soft and fluffy steamed bun stuffed with braised pork belly.',
            img: 'https://media-cdn2.greatbritishchefs.com/media/mxfnekpk/img47161.whqc_768x512q80.jpg'
        },
        'Zong Zi': {
            description: 'Bamboo leaf-wrapped parcels of sticky rice, stuffed with a variety of fillings like pork, mushrooms, and peanuts.',
            img: 'https://storage.googleapis.com/www-cw-com-tw/article/202306/article-64902e5722ebe.jpg'
        },
        'Taiwanese Fried Chicken': {
            description: 'Crispy, golden-brown chicken pieces, marinated with spices and deep-fried, often served with white pepper.',
            img: 'https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2020/03/Taiwanese-Fried-Chicken1.jpg?fit=1300%2C867&ssl=1'
        },
        'Braised Pork Rice': {
            description: 'A simple yet flavorful dish of tender, slow-cooked pork over rice, often accompanied by pickled vegetables.',
            img: 'https://www.bearnakedfood.com/wp-content/uploads/2017/05/DSCF4178-1200x800.jpg'
        },
        'Oyster Vermicelli Noodles': {
            description: 'A warm, hearty bowl of thin noodles in a rich broth, topped with fresh oysters.',
            img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Ha%E5%A9%86%E8%9A%B5%E4%BB%94%E9%BA%B5%E7%B7%9A%E6%89%8B%E5%B7%A5%E9%A4%83%E5%AD%90013_%2826385848314%29.jpg'
        },
        'Scallion Pancake': {
            description: 'Crispy, flaky flatbreads loaded with fragrant scallions, making for a savory snack or side dish.',
            img: 'https://blog.fresh123.net/wp-content/uploads/50449351528_976adfdcfe_h.jpg'
        },
        'Three-Cup Chicken': {
            description: 'A classic dish made with equal parts soy sauce, sesame oil, and rice wine, creating a rich, fragrant sauce for the chicken.',
            img: 'https://curatedkitchenware.com/cdn/shop/articles/20221124144532-3-cup-chicken-1.png?v=1669327840'
        },
        'Fan Tuan': {
            description: 'Sticky rice rolls filled with a variety of ingredients, including pork floss, pickled vegetables, and youtiao (fried dough).',
            img: 'https://www.mashed.com/img/gallery/what-is-fan-tuan-and-what-does-it-taste-like/l-intro-1640875779.jpg'
        },
        'Stinky Tofu': {
            description: 'Deep-fried fermented tofu, known for its pungent aroma but beloved for its crispy exterior and soft interior.',
            img: 'https://cdn.rtaiwanr.com/uploads/images/cover_image/10831/sibling_Ergua_Stinky_Tofu_________-007.jpg'
        },
        'Aiyu Jelly': {
            description: 'A refreshing dessert made from the gel of the Aiyu seed, often served with lemon juice and honey for a sweet and tangy flavor.',
            img: 'https://3.bp.blogspot.com/_m5WRB8ziRT0/TFo-F8s3dBI/AAAAAAAAAiM/CuxstmnJ-Hg/s1600/IMG_8048.JPG'
        },
        'Shaved Ice': {
            description: 'Finely shaved ice piled high, drizzled with sweet syrup, and topped with various toppings like fruit, beans, and taro balls.',
            img: 'https://cdn2.ettoday.net/images/4178/d4178642.jpg'
        },
        // Add the rest of the foods here following the same pattern
        'Pineapple Cake': {
            description: 'Buttery, crumbly pastries filled with sweet and tangy pineapple jam, a popular Taiwanese treat and gift item.',
            img: 'https://www.justaiwantour.com/blog/wp-content/uploads/2020/03/%E4%BD%B3%E5%BE%B7%E7%B3%95%E9%A4%85%EF%BC%8F%E7%B6%AD%E6%A0%BC%E9%A4%85%E5%AE%B6%EF%BC%9A%E9%B3%B3%E6%A2%A8%E9%85%A5%E4%BC%B4%E6%89%8B%E7%A6%AE%EF%BC%88%E5%8F%B0%E7%81%A3%E6%A9%9F%E5%A0%B4%E9%A0%98%E5%8F%96%EF%BC%89.jpg'
        }
    };

// retrieve object details when clicked
$('#food-list li').click(function() {
        var foodItem = $(this).data('food');
        var details = foodDetails[foodItem];
        if (details) {
            $('#food-title').text(foodItem);
            $('#food-description').text(details.description);
            $('#food-image').attr('src', details.img).attr('alt', foodItem + 'Image');
            $('#food-description-card').show();
        }
    });
});

// Ceate Active State
$(document).ready(function() {
    $('#food-list li').click(function() {
        $('#food-list li').removeClass('active');
        $(this).addClass('active');
    });
});