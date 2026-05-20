var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

function init(par1, par2){
    wheel_F = renderer.registerParts(new Parts("flange_F", "wheel_F", "axle_F"));
	wheel_R = renderer.registerParts(new Parts("flange_R", "wheel_R", "axle_R"));
    frame = renderer.registerParts(new Parts(
		"obj1", 
		"obj2", 
		"obj3", 
		"obj4", 
		"obj5", 
		"obj6", 
		"obj7", 
		"obj8", 
		"obj9", 
		"obj10", 
		"obj11", 
		"obj12", 
		"obj13", 
		"obj14", 
		"obj15", 
		"obj16", 
		"obj17", 
		"obj18",
		"obj19", 
		"obj20", 
		"obj21", 
		"obj22", 
		"obj23", 
		"obj24", 
		"obj25", 
		"obj26", 
		"obj27", 
		"obj28", 
		"obj29", 
		"obj30"
		));
}

function render(entity, pass, par3){
    var wheelRotation = renderer.getWheelRotationR(entity);
	var y = -0.57
	var z = 1.05

	frame.render(renderer);
	
	GL11.glPushMatrix();
	renderer.rotate(wheelRotation, 'X', 0, y, z);
	wheel_F.render(renderer);
	GL11.glPopMatrix();

	GL11.glPushMatrix();
	renderer.rotate(wheelRotation, 'X', 0, y, -z);
	wheel_R.render(renderer);
	GL11.glPopMatrix();
}
