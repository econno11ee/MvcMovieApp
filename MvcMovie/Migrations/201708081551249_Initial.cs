namespace MvcMovie.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Movies",
                c => new
                    {
                        MovieID = c.Int(nullable: false, identity: true),
                        Title = c.String(maxLength: 128),
                        ReleaseDate = c.DateTime(),
                        Genre = c.String(maxLength: 50),
                        Price = c.Decimal(storeType: "money"),
                        Rating = c.String(maxLength: 10),
                    })
                .PrimaryKey(t => t.MovieID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Movies");
        }
    }
}
