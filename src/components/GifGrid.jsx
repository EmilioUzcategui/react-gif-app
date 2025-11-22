import { useFetchGifs } from '../hooks/useFetchGifs';
import GifItem from './GifItem';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    console.log({ images, isLoading });

    const gifs = [1, 2, 3, 4, 5, 6]
    console.log('images url:', images[0])
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>cargando...</h2>)
            }
            <div className='card-grid'>
                {
                    images.map(({ id, title, url }) => (
                        <GifItem key={id} title={title} image={url} />
                    ))
                }
            </div>
        </>
    );
};