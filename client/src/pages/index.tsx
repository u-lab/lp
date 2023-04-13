import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>U-lab | 宇都宮大学学生団体。地域に根差すテクノロジー集団。</title>
                <meta name="description" content="宇都宮大学学生団体U-labの公式サイトです。地域に根差すテクノロジー集団。" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='flex h-screen items-center justify-center font-body tracking-wide'>
                <div className='text-center'>
                    <h2 className='mb-4 text-lg font-bold sm:text-2xl'>
                        宇都宮大学U-labのHPは現在改装中です。<br className='block h-4' />最新情報は{" "}
                        <a className='bg-ulab px-2 text-white hover:opacity-80' href="https://twitter.com/ulab_uu">Twitter</a> でご確認ください！
                    </h2>
                    <p className='mb-3 text-sm sm:text-base'>
                        ご連絡はこちらの <a className='text-ulab underline hover:opacity-80' href="mailto:ulab0812@gmail.com">メール</a>{" "}
                        までお願いいたします。
                    </p>
                    <img src="./U-lab_uu.jpg" style={{ display: "inline-block", maxWidth: "80%" }} alt='宇都宮大学U-lab' />
                </div>
            </main>
        </>
    );
}
