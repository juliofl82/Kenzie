import React, { useEffect } from 'react';
import { useDataList } from '../../stores/useDataList';
import NewsCard from './NewsCard/NewsCard';

function NewsList() {
    const { loading, error, listData, loadListData } = useDataList();
    
    useEffect(() => {
        loadListData();
    }, [loadListData]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            {listData.map(news => (
                <NewsCard key={news.id} news={news} />
            ))}
        </div>
    );
}

export default NewsList;
