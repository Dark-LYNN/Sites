import Image from 'next/image'

export default function Image1() {
    return (
        <>
            <div>
                <a href="./">
                    <Image alt='Image 1' src="/image1.jpg" width={900} height={970} />
                </a>
            </div>
        </>
    )
}