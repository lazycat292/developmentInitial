# Development

### Link to Deployed Website
If you used the stencil code, this is `https://lazycat292.github.io/developmentInitial`

### Goal and Value of the Application
This application makes it easier for users to find the sports gear they are looking for. There are options to look by team so they can purchase their favorite teams while there are also options that let you sort by price if the user is looking for more affordable items. 
### Usability Principles Considered
Since design was not graded, it is not the prettiest layout. However, everything is laid out in a way that is easy to look at. It is comprehensible at first sight and the user can efficiently navigate through the website without any problems.
### Organization of Components
I had a StoreItem component that contained information to be displayed for each store item. The store data was passed in from the app and made a StoreItem component. App handled keeping track of most states and displaying them when updated. 
### How Data is Passed Down Through Components
For each store item, I pass in the item and a handleClick function to the StoreItem component as props. In the component, it uses the handle click function to do the things necessary and creates a StormItem that contains all the necessary information which is returned back to the App. Thus, when it is displayed in the App it has all the content.
### How the User Triggers State Changes
The user can trigger many state changes such as pressing add/remove from favorites button which changes list and cart state. The user can also press different filtering/sorting options which change its respective states and the changes are depicted on how the items are displayed or what items are displayed.
