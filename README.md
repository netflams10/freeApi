Event and Issue Tracker

    - User
        - types of user  
            - project_manager
            - programmer
            - tester
        - @params database
            - [ 'email', 'password', 'first_name', 'last_name', 'username', 'status' ==>> ['active', 'pending', 'deactivated'] ]
            - needed params ==>> ['authorization']
            
    - Event
        - Can only be created by [project_manager]
        - Team can be created by [project_manager] => [choose by email and username]
        - Can only be updated and deleted by [project_manager]
        - @params database
            - ["project_manager_id", 'project_name', 'description', 'project_awarder', 'status' ]
            - Team can create issue and update issue
            - [poject_manager ==>> "Create Team Member", "Edit Team Member","View Team Members", "Alert Team Member"]
            
    - issue or bug
        - Team members can be alerted about a bug or issue
        - Team can edit a bug or issue state
        - Team can create issue or bug
        - @params databse
            - ["project_id", "tester_id" -> nullable(), "title", "description" => min:50, "status", "assign_user_id" ]
            - @params db:table ==>> status ['new', 'in_progress', 'testing', 'failed', 'completed']
   
    -Packages
        - jsonwetoken
        - emadadly/laravel-uuid
        - intervention/image
    -Convention
        - Test Driven Development [TDD]
        
        
    - Download [music]
        - Tones & I -->> Dance Monkey
        - Camila Cabello - Havana (Lyrics) ft. Young Thug
