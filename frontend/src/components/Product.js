import '../tailwind.output.css'

function Product(){
    return(
        <div class="bg-gray-200 inline-block shadow-xl mt-5 ml-5 rounded-xl p-8 w-60 ">


                <div class="pt-6 space-y-4">
                    <blockquote>
                        <p class="text-lg font-semibold ">
                            “Tailwind CSS is the only framework that I've seen scale
                            on large teams. It’s easy to customize, adapts to any design,
                            and the build size is tiny.”
      </p>
                    </blockquote>
                    <figcaption>
                        <div>
                            Sarah Dayan
      </div>
                        <div>
                            Staff Engineer, Algolia
      </div>
                    </figcaption>
                </div>
      </div>
    )
}


export default Product;