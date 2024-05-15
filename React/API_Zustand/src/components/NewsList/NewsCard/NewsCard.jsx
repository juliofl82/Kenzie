import React from "react";

function NewsCard({ news }) {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
            <div>
                <strong>Autor:</strong> {news.author}
            </div>
            <div>
                <strong>Categoria:</strong> {news.category}
            </div>
        </div>
    );
}

export default NewsCard;
