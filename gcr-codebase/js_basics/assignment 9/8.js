
$(document).ready(function () {

    // Append a new post at the bottom
    $("#add").click(function () {

        $("#posts").append(`
            <article class="post">
                <h2>New Blog Post</h2>
                <p>This is a newly added blog post.</p>
            </article>
        `);

    });

    // Add featured post at the beginning
    $("#featured").click(function () {

        $("#posts").prepend(`
            <article class="post">
                <h2>Featured Post</h2>
                <p>This is our featured article.</p>
            </article>
        `);

    });

    // Remove last post
    $("#remove").click(function () {

        $("#posts .post").last().remove();

    });

    // Add tag before and after posts
    $("#tag").click(function () {

        $(".post").each(function () {

            $(this).before("<span class='tag'>BLOG START</span>");

            $(this).after("<span class='tag'>#Learning</span>");

        });

    });

    // Highlight posts containing specific keywords
    $("#highlight").click(function () {

        $(".post").each(function () {

            let content = $(this).text().toLowerCase();

            if (content.includes("javascript") ||
                content.includes("jquery")) {

                $(this).addClass("highlight");

            }

        });

    });

});
