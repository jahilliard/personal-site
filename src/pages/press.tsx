import { ReactElement, useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Gallery from 'react-photo-gallery'

import { Layout } from '@/components/Layout'

const photos = [
  {
    src: '/personal_photos/2Z8A3014.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3189.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A2819.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A2907.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A2918.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3143.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3156.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3179.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3196.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3282.JPG',
    width: 3,
    height: 4,
  },
  {
    src: '/personal_photos/2Z8A3177.JPG',
    width: 3,
    height: 4,
  },
]

export default function Products() {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((_event: any, { photo, index }: any) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      {/* @ts-ignore */}
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              styles={{ view: (base, state) => ({ ...base, height: '90vh' }) }}
              currentIndex={currentImage}
              views={photos.map((x) => ({
                source: x.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
