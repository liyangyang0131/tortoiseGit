# tortoiseGit
tortoiseGit基本操作

TortoiseGit 提交代码每次需要输入用户名和密码,解决办法

    Right click → TortoiseGit → Settings → Git → Credential（设置为 wincred - this repository only）


1.默认是master分支

    pull->commit->push

2.pull时，提示因为冲突导致拉取失败

    1.场景一
    user0 有新提交
    user1 没有pull -> 写新代码 -> pull -> 提示有冲突
     
    解决办法一
    -> stash save(把自己的代码隐藏存起来) -> 重新pull -> stash pop(把存起来的隐藏的代码取回来 ) -> 代码文件会显示冲突 -> 右键选择edit conficts，解决后点击编辑页面的 mark as resolved ->  commit&push
     
    解决办法二(尽量少使用，这种方法的优点是在在原编辑器里处理冲突，代码逻辑看得更清楚一些)
    -> stash save(把自己的代码隐藏存起来) -> 重新pull -> stash pop(把存起来的隐藏的代码取回来 ) -> 代码文件会显示冲突 -> 右键选择resolve conflict -> 打开文件解决冲突 -> commit&push
     
    2.场景二
    user0 有新提交
    user1 没有pull -> 写新代码 -> commit&push -> 提示有冲突
    
    解决办法一
    -> pull -> 代码文件会显示冲突 -> 右键选择edit conficts，解决后点击编辑页面的 mark as resolved ->  commit&push

3.远程创建新分支

    Create Branch->Switch/Checkout->在新分支下执行PUSH操作，在对话框中保持远程分支为空白，点击OK，则将在远程创建了新的分支（在PUSH的时候远程服务器发现远程没有该分支，此时会自动创建一个和本地分支名称一样的分支，并将本地分支的内容上传到该分支）。

4.其他成员切换该新分支

    首先进行pull操作， 然后进行切换分支

5.分区合并

    1）进行分支合并之前我们需要明确哪个分支将要合并到哪个分支，首先通过“Switch/CheckOut”切换到主干分支（如develop分支）,然后通过“Merge”继进行合并操作，在对话框中选择需要合并的分支。
    2）分支合并成功后，我们即可以通过Commit与PUSH操作将合并上传到中心服务器。

6.tortoisegit分支使用
    git相对于其他的版本控制，优势在于分支管理。

    几个常见情况及分支使用方法。

    1  对于自己的代码修改后，却已经不知道服务器上的代码是否已经发生改变。此时想上传自己的代码。
    1）在master上创建分支mysrc；
    2）switch到mysrc分支，进行修改代码；
    3）修改好代码后，进行git commit操作；
    4）switch到master分支，进行git pull操作，将服务器上的代码签下来；
    5）进行git merge from mysrc操作，将mysrc的代码合并到master中；
    6）git commit操作；
    7）git push操作。

    2  修改自己的代码过程中，还不需要上传时，需要从服务器上签新的代码，但保留当前的代码修改。
    1）在master上创建分支mysrc；
    2）switch到mysrc分支，进行代码修改；
    3）进行git commit 操作；
    4）switch到master分支，进行git pull操作；
    5）switch到mysrc分支，进行git merge from master操作；
    6）git commit操作。

    3  修改了代码，但仅想上传部分代码，其余代码保留同服务器版本。
    1）在master上创建分支mysrc；
    2）switch到mysrc分支，进行代码修改；
    3）修改好后，对部分代码进行git commit操作；
    4）进行git rebase操作，将其他代码还原；
    5）switch到master分支，进行git merge from mysrc操作；
    6）git push操作。

7.代码回滚（https://www.cnblogs.com/ivan5277/p/9773399.html ）

    1.本地回滚

    右击原代码文件夹-->TortoiseGit-->Show log 选择要回滚到的记录
    右击选择Reset this to this vision。在弹出的对话框中选择reset Type 为hard。

    2.服务器端回滚 

    如果想将本地回滚的代码，提交到服务器，而将服务器的代码覆盖掉的话。直接选择push，在弹出的对话框中，Options中选择 force known changes.