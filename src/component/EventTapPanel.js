import React, { useState } from 'react';
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import Rajresort from '../component/ServiceData';
import '../css/EventTap.css';

function EventTapPanel() {
    const [items, setItems] = useState(Rajresort);

    const filterItems = (category) => {
        if (category === 'All') {
            setItems(Rajresort);
        } else {
            const updatedItems = Rajresort.filter((item) => item.category === category);
            setItems(updatedItems);
        }
    };

    const laptopScreen = useMediaQuery('(min-width: 1024px)');
    const columnCount = laptopScreen ? 3 : 2; // Adjust column count based on screen size

    return (
        <section className="myGallery">
            <div className="container">
                <div className="titleSection">
                    <h1 className='specialh1'>Resort for Events in Palghar
                    </h1>
                </div>
                <div className="filters filter-button-group">
                    <ul>
                        <li className="active">
                            <a onClick={() => filterItems('All')}>All</a>
                        </li>
                        <li>
                            <a onClick={() => filterItems('room')}>Room</a>
                        </li>
                        <li>
                            <a onClick={() => filterItems('wedding')}>Wedding</a>
                        </li>
                        <li>
                            <a onClick={() => filterItems('events')}>Events</a>
                        </li>
                        <li>
                            <a onClick={() => filterItems('birthday')}>Birthday</a>
                        </li>
                    </ul>
                </div>

                <Box sx={{ overflow: 'hidden' }}>
                    <ImageList variant="masonry" cols={columnCount} gap={8}>
                        {items.map((item) => (
                            <ImageListItem key={item.img}>
                                <Image
                                    srcSet={`${item.imageUr1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.imageUr1}?w=248&fit=crop&auto=format`}
                                    alt={'Resort for Events in Palghar'}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </div>
        </section>
    );
}

export default EventTapPanel;
