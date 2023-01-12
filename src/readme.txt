/*
first addtasks shows form // this creates actuall task info into storage which is used down lines
then  displayTasksOfEachProject  displays  ul
then makeSingleTask(1,2,3,4,5,6) displays il for each task


/////

runtime on task creation:

	addtasks
								displayTasksOfE..
																makeSingleT..


	runtime on non task creation/only tabing into a project

	displayTasksOfE..
									makeSingleT..


	/////////////////////////////////////////////////////////////

	contentOfEachProject is oposed to contentOfTabs

	contentOfEachProject uses displayTaksOfEachProyect
	          //

	contentOfTabs as added as an event listener to each task filter button
 contentoftabs makes:
	 content
						tittle
						ul // uses displayall/7/today/impportant  as parameteres


	It uses different SWITCH statements to pick between the (all,7,today,impportant)display* funcitons
	

	         //

every of the 5 display* function uses makeSingleTask
to fill their uls

 since every display* function es different makeSIngleTask has
	different IF statements(project,7,today,important) to make different filters for the lis

          //

a runtime:

 contentOfTabs(displayall/7/today/impportant)
					displayall/7/today/impportant
													makeSingleTask


	contentOfEachProject()
									displayTaksOfEachProyect
																	makeSingleTask









///////////////////////////////////////////////////////////////////

	*/
