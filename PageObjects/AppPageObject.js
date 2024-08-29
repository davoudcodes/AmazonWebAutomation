class AppPageObject
{
    constructor(page)
    {
        this.page = page;

    }

   async goto()
    {
        await this.page.goto('https://www.amazon.in/')
    }
}


module.exports  = {AppPageObject};