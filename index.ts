import {PrismaClient} from '@prisma/client'
import { CLIENT_RENEG_LIMIT } from 'tls'

const prisma = new PrismaClient ()

async function main(){
    //Create user
    // const user = await prisma.user.create({
    //   data: {
    //     name: 'John Doe',
    //     email: 'john@gmail.com'
    //   }    
    // })
 

    //Get all users
    // const users = await prisma.user.findMany({
    //   include: {
    //     articles: true
    //   }
    // })

    // console.log(users)

    //create an article
    // const article = await prisma.article.create({
    //   data:{
    //     title: "John's First Article",
    //     body: "This is Johns first article",
    //     author: {
    //       connect: {
    //         id: 1
    //       }
    //     }
    //   }
    // })
    // console.log(article)

    //Get all articles
    // const allArticles = await prisma.article.findMany()
    // console.log(allArticles)

    //create user and article and associate them with articles
    // const user = await prisma.user.create({
    //   data: {
    //     name: 'Sara Smith',
    //     email: 'sara@gmail.com',
    //     articles: {
    //       create: {
    //         title: "Sara's First Article",
    //         body: "This is Sara's first article"
    //       }
    //     }

    //   }
    // })
    // console.log(user)

    //create an article and associate it with a user
    // const article = await prisma.article.create({
    //   data: {
    //     title: "Sample article",
    //     body: "This is a sample article",
    //     author: {
    //       connect: {
    //         id: 2
    //       }
    //     }
    //   }
    // })

    //loop over sara's articles
    // users.forEach((user) => {
    //   console.log(`User: ${user.name}, Email: ${user.email}`)
    //   console.log('Articles:')
    //   user.articles.forEach((article) => {
    //     console.log(`Title: ${article.title}, Body: ${article.body}`)
    //   })
    //   console.log('\n')
      
    // });

    //update data
    // const user = await prisma.user.update({
    //   where : {
    //     id: 1
    //   },
    //   data: {
    //     name: 'John Doe Jr'
    //   }
    // })

    //remove data
    const article = await prisma.article.delete({
      where: {
        id: 2
      }
    })
}
main()
  .then(async() => {
      await prisma.$disconnect()
  })
  .catch( async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)

  })