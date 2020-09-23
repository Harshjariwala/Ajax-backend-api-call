var aResponse = {
    results: [{ id: 1, Image_URL: "https://live.staticflickr.com/65535/48581128891_9a36cc2647_o.jpg", Title: "SANDWICHES" },
        { id: 2, Image_URL: "https://live.staticflickr.com/65535/48581098086_93eff0d466_o.jpg", Title: "PIZZA" },
        { id: 3, Image_URL: "https://live.staticflickr.com/65535/48581199232_9a29c9b7b3_o.jpg", Title: "PASTA" },
        { id: 4, Image_URL: "https://live.staticflickr.com/65535/48580842211_3377b3aa35_o.jpg", Title: "CHINESE VEGETARIAN" },
        { id: 5, Image_URL: "https://live.staticflickr.com/65535/48580969786_687285a54c_o.jpg", Title: "MEDIFOODS DELIGHTS" }
    ]
};

$.mockjax({
    url: '/carousel',
    dataType: 'json',
    responseText: aResponse
});