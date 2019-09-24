
window.onload = function () {
    var token = '21126882897.79a7067.c1a5b68a5ab24d0d8037ed289fdac546';
    var count = 5;
    var picList = $('#picList');
    var userPicture = $('#userPicture');
    var fullName = $('#fullName');
    var countOfMedia = $('#countOfMedia');
    var mID = null;

    $.ajax({
        url: 'https://api.instagram.com/v1/users/self/?access_token=' + token,
        dataType: 'jsonp',
        type: 'GET',
        data: { access_token: token, count: count },

        success: function (result) {
            console.log("MediaZapros", result);

            userPicture.append('<img src="' + result.data.profile_picture + '">');
            fullName.append('<h1>' + result.data.full_name + '</h1>');
            countOfMedia.append('<h1>Кол-во публикаций: ' + result.data.counts.media + '</h1>');
        },

        error: function (result) {
            console.log(result);
        }
    });


    function vivod() {
        $.ajax({
            url: 'https://api.instagram.com/v1/users/self/media/recent',
            dataType: 'jsonp',
            type: 'GET',
            data: { access_token: token, count: count, max_id: mID },

            success: function (result) {
                console.log(result);
                for (x in result.data) {

                    var picInfo = document.createElement('div');
                    picInfo.setAttribute('id', "picInfo");

                    var caption = document.createElement('div');
                    caption.setAttribute('id', "caption");
                    if (result.data[x].caption) {
                        caption.append('Описание: ' + result.data[x].caption.text + '.' + ' ');
                    }
                    picInfo.append(caption);

                    var countLikes = document.createElement('div');
                    countLikes.setAttribute('id', "countLikes");
                    countLikes.append('Кол-во лайков: ' + result.data[x].likes.count + '.' + ' ');
                    picInfo.append(countLikes);

                    var countComment = document.createElement('div');
                    countComment.setAttribute('id', "countComment");
                    countComment.append('Кол-во комментариев: ' + result.data[x].comments.count + '.' + ' ');
                    picInfo.append(countComment);

                    var listTags = document.createElement('div');
                    listTags.append('Теги: ' + result.data[x].tags.map(item => " " + item) + '.' + ' ');
                    picInfo.append(listTags);

                    var date = document.createElement('div');
                    date.setAttribute('id', "date");
                    date.append('Дата публикации: ' + new Date(result.data[x].created_time * 1000).getDate() + '.');
                    date.append(new Date(result.data[x].created_time * 1000).getMonth() + 1 + '.');
                    date.append(new Date(result.data[x].created_time * 1000).getFullYear() + '.');
                    picInfo.append(date);

                    var picAndInfo = document.createElement('div');
                    picAndInfo.setAttribute('id', "picAndInfo");

                    var img = document.createElement('img');
                    img.setAttribute('src', result.data[x].images.standard_resolution.url);
                    picAndInfo.append(img);

                    picAndInfo.append(picInfo);

                    picList.append(picAndInfo);

                    mID = result.pagination.next_max_id;
                }
            },

            error: function (result) {
                console.log(result);
            }
        });
    }
    vivod();

    $('#loadButton').click(vivod);
};

