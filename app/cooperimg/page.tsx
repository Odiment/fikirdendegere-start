import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Dropzone from '@/components/Dropzone'

export default async function Cooperimg() {

        const supabase = createServerComponentClient({ cookies })
        const {
            data: { user },
          } = await supabase.auth.getUser()

  return (
    <>
    <div className="container justify-center items-center">

        { user === null ?
            <>
                <h1>Lütfen Giriş Yapınız</h1>
            </>
            :
            <>
                <section className='py-24'>
                <div className='container'>
                    <h1 className='text-3xl font-bold'>Upload Files</h1>
                    <Dropzone className='mt-10 border border-neutral-200 p-16' />
                </div>
                </section>
            </>
        }

    </div>
      
    </>
  )
}
