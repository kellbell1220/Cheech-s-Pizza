# 16.6 TextField

Write a program that sets the horizontal alignment and column-size properties of a text field dynamically.

## Example Output

![Sample Output](image/README.jpg)

## Analysis Steps

I needed to create radio buttons and text fields to recreate the example image that was given in the assignment

### Design

I needed to define 2 hboxes one that would hold the textfield and label for "JavaFX" which would be the item that would be manipulated
by my second hBox that would hold radio buttons to control the position, and the column size text field that would change the amount of
colums the first hBox holds.


### Testing

First, I got the first text box created, set the scene and tested the program to see if it was placed
Second, I created the radio buttons, then check to see if they were showing up.
Third, I created the handler for the radio buttons. I checked to make sure they were working
Fourth, I created the column size textField. Again, I made sure it would show up in the bottom hBox
Fifth, I made the handler that would control the function for the column size(this was tricky trying to figure out how to grab the value of the textField)
Lastly, I worked to adjusting orientation of the labels, and the other objects on the screen.


## Notes

Still had some issues on trying to figure out how to align the objects within the pane.

## Do not change content below this line
## Adapted from a README Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
